type SplitType = "chars" | "words" | "lines";

interface SplitOptions {
  type?: string;
  [key: string]: unknown;
}

// Lightweight fallback for GSAP SplitText plugin.
// It supports the subset this project uses: chars/words arrays and revert().
export class SplitText {
  chars: HTMLElement[] = [];
  words: HTMLElement[] = [];
  lines: HTMLElement[] = [];
  private original = new Map<HTMLElement, string>();

  constructor(target: string | HTMLElement | Array<string | HTMLElement>, options: SplitOptions = {}) {
    const elements = this.resolveTargets(target);
    const types = new Set<SplitType>((options.type || "chars").split(",").map((t) => t.trim() as SplitType));

    elements.forEach((el) => {
      this.original.set(el, el.innerHTML);
      const text = el.textContent || "";
      el.innerHTML = "";

      if (types.has("words")) {
        const words = text.trim().split(/\s+/).filter(Boolean);
        words.forEach((word, index) => {
          const span = document.createElement("span");
          span.className = "split-word";
          span.textContent = word;
          this.words.push(span);
          el.appendChild(span);
          if (index < words.length - 1) {
            el.appendChild(document.createTextNode(" "));
          }
        });
      } else if (types.has("chars")) {
        [...text].forEach((char) => {
          if (char === "\n") {
            el.appendChild(document.createElement("br"));
            return;
          }
          if (char === " ") {
            el.appendChild(document.createTextNode(" "));
            return;
          }
          const span = document.createElement("span");
          span.className = "split-char";
          span.textContent = char;
          this.chars.push(span);
          el.appendChild(span);
        });
      } else {
        const span = document.createElement("span");
        span.textContent = text;
        el.appendChild(span);
      }

      if (types.has("lines")) {
        this.lines.push(el);
      }
    });
  }

  revert() {
    this.original.forEach((html, el) => {
      el.innerHTML = html;
    });
    this.original.clear();
    this.chars = [];
    this.words = [];
    this.lines = [];
  }

  private resolveTargets(target: string | HTMLElement | Array<string | HTMLElement>): HTMLElement[] {
    const targets = Array.isArray(target) ? target : [target];
    const resolved: HTMLElement[] = [];

    targets.forEach((t) => {
      if (typeof t === "string") {
        resolved.push(...Array.from(document.querySelectorAll<HTMLElement>(t)));
      } else if (t) {
        resolved.push(t);
      }
    });

    return resolved;
  }
}
