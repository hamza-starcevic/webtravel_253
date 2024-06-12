# Define project directory
$projectDir = "C:\Users\hamza.starcevic\OneDrive - Dedalus S.p.A\Desktop\Personal\Projects\webtravel_253\webtravel_253\webtravel_brojindeksa"

# Define backend and frontend start commands
$backendStartCommand = "cd $projectDir; nodemon server.js"
$frontendStartCommand = "cd $projectDir\client; npm run dev"

# Function to start a new PowerShell window
function Start-NewPowerShellWindow {
    param (
        [string]$Command
    )
    Start-Process -FilePath "powershell.exe" -ArgumentList "-NoExit", "-Command", $Command
}

# Start backend server in a new PowerShell window
Start-NewPowerShellWindow -Command $backendStartCommand

# Start frontend server in another new PowerShell window
Start-NewPowerShellWindow -Command $frontendStartCommand

Write-Output "Backend and frontend servers are starting in separate windows..."
