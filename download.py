import requests

# URL of the file to download
url = "https://www.overleaf.com/download/project/65592b53ab61f01b461a4495/build/193d9a58062-31a80c395eeeeebf/output/output.pdf"

# Name of the file to save
filename = "md1_ws_2_sol.pdf"

try:
    # Send a GET request to the URL
    response = requests.get(url)
    response.raise_for_status()  # Raise an error for bad status codes

    # Write the content to a file
    with open(filename, "wb") as file:
        file.write(response.content)

    print(f"File downloaded successfully and saved as {filename}")
except requests.exceptions.RequestException as e:
    print(f"An error occurred: {e}")
