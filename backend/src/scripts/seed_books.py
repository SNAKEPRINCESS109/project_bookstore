import json
import random

# Load original Open Library response
with open('books.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

books = data.get("docs", [])

# Prepare list of documents with added price
result = []
for book in books:
    title = book.get("title", "Unknown Title")
    authors = book.get("author_name", ["Unknown Author"])
    cover_id = book.get("cover_i")
    cover_url = f"https://covers.openlibrary.org/b/id/{cover_id}-M.jpg" if cover_id else None
    price = round(random.uniform(10.0, 40.0), 2)

    result.append({
        "title": title,
        "author_name": authors,
        "cover_i": cover_url,
        "price": price
    })

# Save to JSON file for MongoDB
with open("books_with_prices.json", "w", encoding="utf-8") as out_file:
    json.dump(result, out_file, indent=2)

print("✅ books_with_prices.json created successfully!")
