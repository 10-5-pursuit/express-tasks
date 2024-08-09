\c task_app

INSERT INTO users (username, email, password_hash) VALUES
  ('john_doe', 'john@example.com', 'password123'),
  ('jane_smith', 'jane@example.com', 'letmein2024'),
  ('alex_wong', 'alex@example.com', 'securepassword'),
  ('sara_jones', 'sara@example.com', 'p@ssw0rd');

INSERT INTO tasks (title, description, completed, user_id, created_at) VALUES
  ('Study for Interviews', 'Review common interview questions and practice problem-solving.', false, 1, '2024-01-25 10:00:00'),
  ('Complete 10 LeetCode Problems', 'Solve a set of coding problems on LeetCode for skill improvement.', false, 2, '2024-01-25 12:30:00'),
  ('Build a CRUD App', 'Create a basic CRUD (Create, Read, Update, Delete) application for hands-on experience.', false, 3, '2024-01-26 09:15:00'),
  ('Learn a New Programming Language', 'Explore the fundamentals of a programming language you are not familiar with.', false, 4, '2024-01-26 14:45:00'),
  ('Implement RESTful API', 'Develop RESTful endpoints for your application.', false, 1, '2024-01-27 11:00:00'),
  ('Write Unit Tests', 'Create unit tests to ensure code quality and reliability.', false, 2, '2024-01-28 09:30:00'),
  ('Deploy Application to Heroku', 'Deploy your application to Heroku for production use.', false, 3, '2024-01-29 14:00:00'),
  ('Refactor Codebase', 'Optimize and improve the structure of your codebase.', false, 4, '2024-01-30 10:45:00'),
  ('Attend Tech Meetup', 'Participate in a local tech meetup to network and learn from others.', false, 1, '2024-01-31 18:00:00'),
  ('Review Design Patterns', 'Study common design patterns and their applications in software development.', false, 2, '2024-02-01 13:15:00');