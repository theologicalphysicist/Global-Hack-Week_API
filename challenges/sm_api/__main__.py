import app
from urllib.parse import urlencode

#_ SETUP LOGGER
MAIN_LOGGER = app.getLogger(__name__)

CODE_STRING = input("Enter the code string here (please enter only one line of code): ")

questions = app.SO_API.fetch("search/advanced?" + urlencode({
        "q": CODE_STRING,
        "accepted": True,
        "closed": True
    })
)
MAIN_LOGGER.debug(app.PP(questions["items"]))

# MAIN_LOGGER.debug("HELLO WORLD")
# MAIN_LOGGER.info("HELLO WORLD")
# MAIN_LOGGER.warning("HELLO WORLD")
# MAIN_LOGGER.error("HELLO WORLD")
# MAIN_LOGGER.critical("HELLO WORLD")