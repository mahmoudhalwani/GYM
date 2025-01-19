/* General Styling */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    color: #333;
    background-color: #f9f9f9;
}

/* Navbar Styling */
.navbar {
    background-color: #2a2a72;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.nav-links a {
    color: #fff;
    text-decoration: none;
    margin: 0 15px;
    transition: color 0.3s;
}

.nav-links a:hover {
    color: #f39c12;
}

/* Hero Section */
.hero {
    background: url('https://source.unsplash.com/1600x900/?gym,fitness') no-repeat center center/cover;
    height: 100vh;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 20px;
}

.hero h1 {
    font-size: 3em;
    margin: 0.5em 0;
}

.hero p {
    font-size: 1.5em;
    margin: 0.5em 0;
}

.hero button {
    background-color: #f39c12;
    color: #fff;
    border: none;
    padding: 10px 20px;
    margin: 10px;
    cursor: pointer;
    font-size: 1em;
    border-radius: 5px;
    transition: background-color 0.3s;
}

.hero button:hover {
    background-color: #d35400;
}

/* Features Section */
.features {
    display: flex;
    justify-content: space-around;
    padding: 50px 20px;
    background-color: #fff;
}

.feature {
    text-align: center;
    max-width: 300px;
    transition: transform 0.3s;
}

.feature img {
    width: 100%;
    height: auto;
    border-radius: 10px;
}

.feature h3 {
    margin: 20px 0 10px;
    color: #2a2a72;
}

.feature p {
    font-size: 1em;
    color: #666;
}

.feature:hover {
    transform: translateY(-10px);
}

/* Plans Section */
.plans {
    background-color: #f3f4f6;
    padding: 50px 20px;
    text-align: center;
}

.plan {
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 20px;
    margin: 20px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
}

.plan:hover {
    transform: translateY(-10px);
}

.plan h3 {
    color: #2a2a72;
}

.plan p {
    color: #666;
}

.plan button {
    background-color: #2a2a72;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.plan button:hover {
    background-color: #1f1f6f;
}

/* Trainers Section */
.trainers {
    display: flex;
    justify-content: space-around;
    padding: 50px 20px;
    background-color: #fff;
}

.trainer {
    text-align: center;
    max-width: 300px;
    transition: transform 0.3s;
}

.trainer img {
    width: 100%;
    height: auto;
    border-radius: 50%;
}

.trainer h4 {
    margin: 20px 0 10px;
    color: #2a2a72;
}

.trainer p {
    font-size: 1em;
    color: #666;
}

.trainer:hover {
    transform: translateY(-10px);
}

/* Contact Section */
.contact {
    background-color: #f39c12;
    color: white;
    padding: 50px 20px;
    text-align: center;
}

.contact h3 {
    color: white;
    margin-bottom: 20px;
}

.contact form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.contact input, .contact textarea {
    width: 100%;
    max-width: 400px;
    padding: 10px;
    margin: 10px 0;
    border: none;
    border-radius: 5px;
}

.contact button {
    background-color: #fff;
    color: #f39c12;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.contact button:hover {
    background-color: #d35400;
    color: white;
}

/* Footer Section */
.footer {
    background-color: #2a2a72;
    color: white;
    padding: 20px;
    text-align: center;
}
