<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quote Generator App</title>
<link rel="Stylesheet" type="text/css" href="Styles.css"></head><link rel="Stylesheet" type="text/css" href="style.css">
    <body>
    <h1>Quote Generator App</h1>
    <p>Click the button to Generate a Quote</p>
    <button onclick="newQuote('quote')">Generate quote</button>
    <p id="quote"></id><p>
<div class="footer">
    <script>
        function newQuote(quot) {
        var quotes = [
        "The greatest glory in living lies not in never falling, but in rising every time we fall.-Nelson Mandela",
        "The way to get started is to quit talking and begin doing.-Walt Disney",
        "Your time is limited, so don't waste it living someone else's life. -Steve Jobs",
        "If life were predictable it would cease to be life, and be without flavor. -Eleanor Roosevelt",
        "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. -James Cameron",
        "Life is what happens when you're busy making other plans. -John Lennon",
        "Spread love everywhere you go. Let no one ever come to you without leaving happier. -Mother Teresa"
        ];

        var randomQuote = Math.floor(Math.random() * quotes.length)
        document.getElementById(quot).innerHTML = quotes[randomQuote];
        }
      </script>
      </body>
      </html>
