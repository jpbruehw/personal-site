import os
from flask import Flask, render_template, request

# initialize the app
app = Flask(__name__)

# define routes
@app.route('/', methods=["GET"])
def home():
    """Render homepage """
    
    # set page title
    title = 'Welcome!'

    return render_template('home.html', title=title)

if __name__ == '__main__':
    app.run(debug=True)