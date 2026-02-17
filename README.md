

def line():
    print("=" * 55)

def slow_print(messages):
    for msg in messages:
        print(msg)

line()

intro = [
    "Hello there 👋",
    "Welcome to my project!",
    "",
    "I'm a Frontend Developer",
    "and a Cybersecurity Enthusiast 🔐",
    "I enjoy Bug Bounty Hunting and learning how systems break (and how to fix them)."
]

slow_print(intro)

line()

sections = {
    "🌐 Portfolio": "https://ynubsec.github.io",
    "📝 Blogs": "https://ynubsec.github.io/blogs",
    "💻 Projects": "Explore the repository folders",
}

print("\nFind me around the web:\n")

for name, link in sections.items():
    print(f"{name:<15} -> {link}")

line()

skills = [
    "HTML / CSS / JS",
    "Frontend Development",
    "Bug Bounty Hunting",
    "Web Security Learning",
]

print("\nCurrent Focus:\n")
for skill in skills:
    print(f" - {skill}")

line()

print("\nThanks for checking out the project 🚀")
