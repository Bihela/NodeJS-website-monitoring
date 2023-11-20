## Managing Websites

### Adding a Website

To add a website to the monitoring list, follow these steps:

1. Open the `websites.json` file in the `node-app` directory.
2. Add a new object to the array with the following format:

    ```json
    {
      "url": "https://example.com",
      "name": "Example Site"
    }
    ```

3. Save the `websites.json` file.

### Removing a Website

To remove a website from the monitoring list, follow these steps:

1. Open the `websites.json` file in the `node-app` directory.
2. Find the object corresponding to the website you want to remove.
3. Delete the entire object.
4. Save the `websites.json` file.
