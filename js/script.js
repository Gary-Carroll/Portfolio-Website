function copyText1() {
	navigator.clipboard.writeText(`import lichess.api
import matplotlib.pyplot as plt
import seaborn as sns
import numpy as np
import pickle
from datetime import datetime
import pandas as pd
import calendar
from pprint import pprint

user_id = 'garethc13'
user = lichess.api.user(user_id)
print(user['perfs']['bullet']['rating'])`);

	var container = document.querySelector('#copy1');
	var message = container.querySelector('.copyMessage');
	var button = container.querySelector('.copyButton');

	message.style.display = 'inline';
	button.addEventListener('mouseleave', function() {
		message.style.display = 'none';
	});
}

function copyText2() {
	navigator.clipboard.writeText(`gameslist = list(lichess.api.user_games(user_id, max=3000, perfType='bullet'))
			       whitegames = [game for game in gameslist if game['players'].get('white').get('user').get('id') == 'garethc13']
			       blackgames = [game for game in gameslist if game['players'].get('white').get('user').get('id') != 'garethc13']
			       print(len(gameslist),'total bullet games.')
			       print(len(whitegames),'as white.')
			       print(len(blackgames),'as black.')`);

	var container = document.querySelector('#copy2');
	var message = container.querySelector('.copyMessage');
	var button = container.querySelector('.copyButton');

	message.style.display = 'inline';
	button.addEventListener('mouseleave', function() {
		message.style.display = 'none';
	});
}
