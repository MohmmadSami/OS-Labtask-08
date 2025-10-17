// Simple JavaScript for the Riphah LMS System

// Login Form Submission
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation (in a real app, this would be server-side)
    if (username === 'admin' && password === 'password') {
        alert('Login successful!');
        // Redirect or show dashboard
        document.getElementById('dashboard').scrollIntoView();
    } else {
        alert('Invalid credentials. Please try again.');
    }
});

// Smooth Scrolling for Navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Dynamic Course Addition (Example)
function addCourse(title, description) {
    const courseList = document.querySelector('.course-list');
    const courseDiv = document.createElement('div');
    courseDiv.className = 'course';
    courseDiv.innerHTML = `<h3>${title}</h3><p>${description}</p>`;
    courseList.appendChild(courseDiv);
}

// Example: Add a new course
addCourse('Advanced Programming', 'Learn advanced programming concepts.');

// Dynamic Student Addition (Example)
function addStudent(name, details) {
    const studentList = document.querySelector('.student-list');
    const studentDiv = document.createElement('div');
    studentDiv.className = 'student';
    studentDiv.innerHTML = `<h3>${name}</h3><p>${details}</p>`;
    studentList.appendChild(studentDiv);
}

// Example: Add a new student
addStudent('John Doe', 'Enrolled in Course 1.');