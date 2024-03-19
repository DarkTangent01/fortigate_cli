# FortiGate SSH Access Tool

This Node.js script allows you to establish an SSH connection to a FortiGate device and execute commands to retrieve interface information.

## Prerequisites

- Node.js installed on your machine
- A FortiGate device accessible via SSH
- SSH credentials (username and password) for the FortiGate device

## Installation

1. Clone or download this repository to your local machine.
2. Install dependencies by running `npm install`.
3. Create a `.env` file in the root directory of the project and provide the following environment variables:

FORTIGATE_HOST=your_fortigate_host
FORTIGATE_USERNAME=your_ssh_username
FORTIGATE_PASSWORD=your_ssh_password

## Usage

1. Ensure that your FortiGate device is accessible via SSH and the provided credentials are correct.
2. Run the script using `node script.js`.
3. The script will connect to the FortiGate device, execute the command `show system interface`, and display interface information.

## Customization

- You can customize the command executed on the FortiGate device by modifying the `execCommand` parameter in the code.
- Additional parsing or processing of the retrieved data can be implemented as per your requirements.

## Notes

- This script utilizes the `dotenv` package to load environment variables from a `.env` file.
- Error handling is implemented to catch and display any errors that may occur during execution.

## Disclaimer

Use this script responsibly and ensure compliance with any applicable laws and regulations. Always obtain proper authorization before accessing any devices or systems.

