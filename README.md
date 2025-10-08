# Teen Game Playbook Solutions 🧩

[![MIT License][license-shield]][license-url]

A simple and clean web gallery to display solutions for the "Teen Game Playbook: Puzzles, Mazes & More!" activity book.

<!-- You can add a link to a live demo if you deploy it! -->
<!-- > **[View Live Demo](https://your-username.github.io/your-repo/)** -->

<br />

![Project Screenshot](./assests/screenshot.png)

---

## 📖 About The Project

This project provides a straightforward and user-friendly web interface to view the solutions for various puzzles found in the **Teen Game Playbook**. Instead of flipping to the back of the book, users can easily browse and view high-resolution solution images directly in their browser.

**Features:**

- Clean and responsive image gallery.
- Click on any image to view a full-size version in a modal overlay.
- Easy to add new solution images.
- Lightweight and fast, with no external frameworks.

### Built With

This project is built with fundamental web technologies:

- HTML5
- CSS3
- Vanilla JavaScript

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You only need a modern web browser (like Chrome, Firefox, or Edge).

### Installation

1.  Clone the repository:
    ```sh
    git clone https://github.com/[your-github-username]/[your-repo-name].git
    ```
2.  Navigate to the project directory:
    ```sh
    cd [your-repo-name]
    ```
3.  Open the `index.html` file in your favorite web browser. You can usually just double-click the file.

That's it! You should now see the solution gallery.

---

## 🖼️ Usage

- Scroll through the gallery to find the puzzle solution you're looking for.
- Click on any solution image to open it in a full-screen modal view.
- Click the '×' button or anywhere outside the image to close the modal.

### Adding New Solutions

To add a new solution to the gallery:

1.  Place your new solution image (e.g., `new_puzzle.jpg`) inside the `/assests` folder.
2.  Open `index.html` and add the following block inside the `<div class="gallery">`:

    ```html
    <div>
      <img src="./assests/new_puzzle.jpg" alt="A brief description" />
      <p>Puzzle Name <b>Puzzle Number/Topic</b></p>
    </div>
    ```

3.  Save the file and refresh your browser to see the new solution.

---

## 🤝 Contributing

Contributions make the open-source community an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

## 📜 License

Distributed under the MIT License. See `LICENSE.txt` for more information.

---

<!-- MARKDOWN LINKS & IMAGES -->

[license-shield]: https://img.shields.io/github/license/[your-github-username]/[your-repo-name].svg?style=for-the-badge
[license-url]: https://github.com/[your-github-username]/[your-repo-name]/blob/master/LICENSE.txt
