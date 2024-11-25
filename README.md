
# Online Marketplace

![Online market Place](ecomApp.png)

## Overview
This project is an online marketplace built using **React** and **Redux** for the frontend, and **Django** with **Django REST Framework (DRF)** for the backend. The design is styled using **Bootstrap**.

## Features
- User authentication and authorization
- Product listing and detail pages
- Shopping cart functionality
- Order management
- Responsive design

## Technologies Used
- **Frontend**: React, Redux, Bootstrap
- **Backend**: Django, Django REST Framework
- **Database**: SQLlite3
- **Version Control**: Git

## Installation

### Prerequisites
- Node.js
- Python
- PostgreSQL

### Backend Setup
1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/your-repo-name.git
    cd your-repo-name
    ```

2. Create a virtual environment and activate it:
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    ```

3. Install the backend dependencies:
    ```bash
    pip install -r requirements.txt
    ```

4. Set up the database:
    ```bash
    python manage.py migrate
    ```

5. Create a superuser:
    ```bash
    python manage.py createsuperuser
    ```

6. Run the development server:
    ```bash
    python manage.py runserver
    ```

### Frontend Setup
1. Navigate to the frontend directory:
    ```bash
    cd frontend
    ```

2. Install the frontend dependencies:
    ```bash
    npm install
    ```

3. Start the frontend development server:
    ```bash
    npm start
    ```

## Usage
- Access the frontend at `http://localhost:3000`
- Access the backend API at `http://localhost:8000/api`

## Contributing
1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Contact
- **Your Name** - nayakanil43603@gmail.com
- **GitHub** - Anilnayak126
