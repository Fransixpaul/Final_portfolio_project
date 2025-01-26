# Story Sharing App

This project is a **Story Sharing App** where users can create, edit, delete, and view stories. The app is built with React for the frontend and leverages Redux for state management. It also integrates with a backend API to handle data persistence.

---

## Features

### 1. **Story Management**
   - Create a new story with the following fields:
     - Username
     - Caption
     - Tags
     - Image (uploaded as Base64)
   - Edit an existing story.
   - Delete a story.

### 2. **Dynamic Story Display**
   - View all stories dynamically fetched from the backend.
   - Like functionality for stories.

### 3. **Form Handling**
   - Form for creating and editing stories using Ant Design components.
   - Validation for required fields.

### 4. **State Management**
   - Redux for managing story data and application state.

---

## Tech Stack

### **Frontend**
- React (Functional Components)
- Redux (State Management)
- Ant Design (UI Library)
- FileBase64 (Image Uploads)

### **Backend**
- API integration (Assumes a RESTful API is used for CRUD operations.)

### **Other Tools**
- Babel (Transpiler)
- Webpack (Module Bundler)

---

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open the application in your browser:
   ```
   http://localhost:3000
   ```

---

## Usage

1. Open the app in your browser.
2. Create a new story by filling in the form and uploading an image.
3. View, edit, or delete stories as needed.
4. Like a story to show your appreciation.

---

## Known Issues

- Ensure `setSelectedId` is properly passed as a prop to avoid runtime errors.
- Validate that the backend API is running and accessible for seamless functionality.

---

## Future Improvements

- Add authentication for user-specific story management.
- Enhance the UI with animations and improved responsiveness.
- Implement search and filtering for stories.
- Add support for video uploads.

---

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch for your feature:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add a new feature"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Open a Pull Request.

---


---

## Contact

If you have any questions or feedback, feel free to reach out:

- **Email**: kayininse@gmail.com
- **GitHub**: [your-github-profile](https://github.com/fransixpaul)

