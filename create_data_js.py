import io

try:
    # Read the JSON content (assuming it's UTF-8)
    with io.open("words.json", "r", encoding="utf-8") as f:
        json_content = f.read()

    # Write the JS content with UTF-8 encoding
    with io.open("data.js", "w", encoding="utf-8") as f:
        f.write(u"const wordList = ")
        f.write(json_content)
        f.write(u";")
        
    print "Successfully created data.js with UTF-8 encoding."

except Exception as e:
    print "Error:", e
