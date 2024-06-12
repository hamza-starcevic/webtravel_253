# Function to convert files to UTF-8 without BOM
function Convert-ToUtf8NoBom {
    param (
        [string]$Path
    )

    Get-ChildItem -Path $Path -Recurse -File | ForEach-Object {
        $content = Get-Content -Path $_.FullName -Raw
        [System.IO.File]::WriteAllText($_.FullName, $content, New-Object System.Text.UTF8Encoding($false))
    }
}

# Set the project directory
$projectDir = "C:\Users\hamza.starcevic\OneDrive - Dedalus S.p.A\Desktop\Personal\Projects\webtravel_253\webtravel_253\webtravel_brojindeksa"

# Convert all files in the project directory to UTF-8 without BOM
Convert-ToUtf8NoBom -Path $projectDir

Write-Output "All files in the project directory have been converted to UTF-8 without BOM."
