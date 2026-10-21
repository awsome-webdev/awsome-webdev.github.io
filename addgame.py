#!/usr/bin/env python3
"""Add games to games.json interactively."""
import json
import os

FILE = "games.json"


def load():
    if not os.path.exists(FILE):
        return []
    with open(FILE, "r", encoding="utf-8") as f:
        return json.load(f)


def save(games):
    with open(FILE, "w", encoding="utf-8") as f:
        json.dump(games, f, indent=4, ensure_ascii=False)


def main():
    games = load()
    print(f"Loaded {len(games)} games from {FILE}")
    print("Tip: type | in the name for a line break (becomes <br>)\n")

    while True:
        name = input("Name (blank to quit): ").strip()
        if not name:
            break
        name = name.replace("|", "<br>")

        url = input("URL: ").strip()
        game_id = input("ID: ").strip()

        if any(g.get("id") == game_id for g in games):
            print(f"ID '{game_id}' already exists, skipping.\n")
            continue

        games.append({"name": name, "url": url, "id": game_id})
        save(games)
        print(f"Added '{name}'. Total: {len(games)}\n")


if __name__ == "__main__":
    main()