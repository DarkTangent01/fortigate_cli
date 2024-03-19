require('dotenv').config(); // Load environment variables from .env file
const { NodeSSH } = require('node-ssh');

const fortigateHost = process.env.FORTIGATE_HOST;
const username = process.env.FORTIGATE_USERNAME;
const password = process.env.FORTIGATE_PASSWORD;

// Function to establish ssh connection and execute commands
const accessFortigate = async () => {
    const ssh = new NodeSSH();

    try {
        // Connect to Fortigate device
        await ssh.connect({
            host: fortigateHost,
            username,
            password
        });

        console.log('[+] Connected to FortiGate');

        // Execute commands (replace with the desired commands)
        const result = await ssh.execCommand("show system interface");

        // Parse interface information
        const interfacesData = result.stdout
            .split('edit ')
            .slice(1)
            .map(section => {
                const lines = section.split('\n').filter(line => line.trim() !== '');
                const name = lines[0].split('"')[1];
                const info = lines.slice(1).filter(line => !line.trim().startsWith('next') && !line.trim().startsWith('end')).join('\n');
                return { name, info };
            });

        // Print interface information
        console.log('Interface information:');
        interfacesData.forEach(iface => {
            console.log(`Interface Name: ${iface.name}`);
            console.log(`Interface Details:\n${iface.info}\n`);
        });

        // Disconnect SSH connection
        ssh.dispose();
    } catch (err) {
        console.error('Error: ', err);
    }
};

// Calling the function to access the FortiGate device
accessFortigate();
