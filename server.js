import http from 'http'

const port = 2200;

const server = http.createServer((req, res) => {

    if (req.url === '/me') {
        res.statusCode = 200
        res.setHeader("Content-Type", "text/plain");
        res.write("A Lakshmanan")
        res.write("Email:lakshmanannamneedi143@gmail.com | Phone:9347288588<\n")
        res.write("Address: Chinnamiram,ASR-Nagar,pin:534201,SRKR-college\n")
        res.write("__________________________________________________________________________\n")
        res.write("Profile:\n")
        res.write("I am Lakshmana,a computer science student.I consider myself \n a responsible and ordelr person. I am looking forward for my first work \nexperience.\n")
        res.write("__________________________________________________________________________\n")
        res.write("Education\n")
        res.write("2021\n")
        res.write("SASI EM SCHOOL\n")
        res.write("10th class:")
        res.write("with 92%\n")
        res.write("2021-2023\n")
        res.write("SASI Jr. college\n")
        res.write("Intermediate:")
        res.write("with 96%\n")
        res.write("2023-2027\n")
        res.write("SRKR ENGINEERING COLLEGE\n")
        res.write("Pursuing b.tech:")
        res.write(" with cgpa 8.66\n")
        res.write("__________________________________________________________________________\n")
        res.write("Skills:\n")
        res.write("Cisco:\n")
        res.write("C course in online\n")
        res.write("Cybersecurity course in online\n")
        res.write("Ds\n")
        res.write("Basics in Python\n")
        res.write("__________________________________________________________________________\n")
        res.write("Technical skills:\n")
        res.write("Ms word\n")
        res.write("Excel sheet\n")
        res.write("ppt\n")
        res.write("Ms installation\n")
        res.write("Os installation\n")
        res.end()
    }

    else if (req.url === '/html') {
        res.statusCode = 200
        res.setHeader("Content-Type", "text/html");
        res.write(`<!DOCTYPE html>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resume</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        .container {
            width: 80%;
            margin: auto;
            background-color: #fff;
            padding: 20px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .header, .section {
            padding: 10px 0;
            border-bottom: 1px solid #ddd;
        }
        .header {
            text-align: center;
            color: #333;
        }
        .header h1 {
            margin: 0;
            color: #0056b3;
        }
        .header p {
            margin: 5px 0;
            color: #555;
        }
        .section h2 {
            color: #0056b3;
        }
        .section p, .section ul {
            margin: 5px 0;
            color: #333;
        }
        .section ul {
            list-style: none;
            padding: 0;
        }
        .section ul li {
            margin: 5px 0;
            padding: 5px;
            background-color: #e9f5ff;
        }
        .section ul li:hover {
            background-color: #cfe8ff;
        }
    </style>
</head>
<body>

<div class="container">
    <div class="header">
        <h1>A Lakshmana</h1>
        <p>Email:lakshmanannamneedi143@gmail.com | Phone:9347288588</p>
        <p>Address: Chinnamiram,ASR-Nagar,pin:534201,SRKR-college</p>
    </div>
    <div class="section">
        <h2><strong>Profile:</strong></h2>
        <p>I am Lakshmana,a computer science student.I consider myself a responsible and ordelr person. I am looking forward for my first work <br>experience.</p>
    </div>
    <div class="section">
        <h2>Education</h2>
        <p><strong>2021</strong></p>
        <p>SASI EM SCHOOL</p>
        <p><strong>10th class:</strong> with 92%</p>
        <p><strong>2021-2023</strong></p>
        <p>SASI Jr. college</p>
        <p><strong>Intermediate:</strong> with 96%</p>
        <p><strong>2023-2027</strong></p>
        <p>SRKR ENGINEERING COLLEGE</p>
        <p><strong>Pursuing b.tech:</strong> with cgpa 8.66</p>
    </div>
    <div class="section">
        <h2><strong>Skills:</strong></h2>
        <h3>Cisco:</h3>
        <ul>
            <li>C course in online</li>
            <li>Cyber security in online</li>
            <li>Ds</li>
            <li>Basics in Python</li>
        </ul>
        <h2><strong>Technical Skills:</strong></h2>
        <ul>
            <li>Ms Word</li>
            <li>Excel sheet</li>
            <li>PPT</li>
            <li>Ms installation</li>
            <li>Os installation</li>
        </ul>
    </div>
</div>

</body>
</html>
</body>
</html>
`)
        res.end()
        
        }
        else if (req.method === 'POST' && req.url === '/recivedata') {
            res.statusCode = 200
            res.setHeader("Content-Type", "application/json");
            let body = "";
            req.on("data", (chunk) => {
                body += chunk.toString();
            });
            console.log(body)
            res.end()
        }
    
        else if (req.url === '/senddata') {
            res.statusCode = 200
            res.setHeader("Content-Type", "application/json");
            const data = { Name: "Teja", Branch: "cse" }
            res.end(JSON.stringify(data))
        }
    
});

server.listen(port, () => {
    console.log(`Server running at ${port}`);
});