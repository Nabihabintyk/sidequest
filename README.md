# SideQuest

SideQuest is a hyper-local web app designed for apartment complexes and small neighborhood blocks. Instead of using money for tiny favors, neighbors post 5-minute tasks, earn Civic Credits (CC), and redeem those credits at local partner shops.

Built for **MLH Global Hack Week: Builders Week**.

---

## The Idea

Most neighborhood apps fail because asking a stranger for a small favor feels awkward, and paying $2 for a 5-minute task makes things weirder.

SideQuest fixes this by:

- Keeping tasks super short (under 10 minutes).
- Using a time-banking credit system instead of cash.
- Restricting task feeds to verified building/block rings so you're only interacting with actual neighbors.

---

## What's Built (MVP Features)

- **Micro-Task Feed (`Feed.jsx`):** Post quick requests (e.g., holding a delivery box, borrowing a step ladder, resetting a circuit breaker) and set a CC reward. Nearby neighbors can accept requests in one click.
- **Civic Wallet (`Wallet.jsx`):** Track your earned CC balance, total time contributed to your neighborhood, daily activity streaks, and hero levels.
- **Local Shop Redemption:** View partner perks (like free coffee at a neighborhood bakery or discounts at the corner store) that can be unlocked using earned credits.
- **Bottom Tab Navigation (`App.js`):** Responsive mobile-first view to switch between the task feed and your personal wallet.

---

## Tech Stack

- **Frontend:** React.js, JavaScript (ES6+), CSS3
- **UI & Icons:** Lucide Icons (`lucide-react`)
- **Backend:** Firebase Firestore (for credit ledger transactions)
- **Hosting & Version Control:** Git, GitHub, Vercel

---

## How to Run It Locally

1. **Clone the repo:**
   ```bash
   git clone [https://github.com/Nabihabintyk/sidequest.git](https://github.com/Nabihabintyk/sidequest.git)
   cd sidequest
   ```
