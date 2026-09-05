# Teacher's Day Python Script
import time

class Teacher:
    def __init__(self, name):
        self.name = name
        self.qualities = ["Patience", "Wisdom", "Debugging Skills"]

    def wish(self):
        print(f"\n[+] Executing Wish for {self.name}...")
        time.sleep(1)
        print(f"[+] Loaded Qualities: {', '.join(self.qualities)}")
        print("\n>>> Happy Teacher's Day, Sir! Thanks for being the best compiler of our knowledge! <<<\n")

if __name__ == "__main__":
    sir = Teacher("Computer Sir")
    sir.wish()
