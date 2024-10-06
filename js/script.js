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

function copyText3() {
	navigator.clipboard.writeText(`move = ['a3','a4','b3','b4','c3','c4','d3','d4','e3','e4','f3','f4','g3','g4','h3','h4','Nf3','Nb3','Na3','Nh3']
squares = [[2,7],[3,7],[2,6],[3,6],[2,5],[3,5],[2,4],[3,4],[2,3],[3,3],[2,2],[3,2],[2,1],[3,1],[2,0],[3,0],
           [2,2],[2,6],[2,7],[2,0]]
values = [sum(1 for i in blackgames if i['moves'].split()[0] == m) for m in move]
data = np.zeros([8, 8])
data[[s[0] for s in squares], [s[1] for s in squares]] = values
data_avg = data/sum(sum(data))   
cmap = sns.cm.rocket_r
x_axis_labels = ['h','g','f','e','d','c','b','a']
y_axis_labels = [*range(1,9)]
plt.gcf().set_facecolor('#333333')
plt.gca().set_facecolor('#333333') 
ax = sns.heatmap(data_avg, square=True, xticklabels=x_axis_labels, yticklabels=y_axis_labels, cmap=cmap, linewidth=0.5, cbar_kws={'label': 'Move Frequency'}) 
plt.title('Opening Moves of my Opponents as White', color='white') 
ax.set_xlabel('File', color='white') 
ax.set_ylabel('Rank', color='white')
ax.tick_params(colors='white')
colorbar = ax.collections[0].colorbar
colorbar.set_label('Move Frequency', color='white')
colorbar.ax.yaxis.set_tick_params(color='white')
plt.setp(colorbar.ax.get_yticklabels(), color='white') 
plt.savefig('openings.png')
plt.show()`);

	var container = document.querySelector('#copy3');
	var message = container.querySelector('.copyMessage');
	var button = container.querySelector('.copyButton');

	message.style.display = 'inline';
	button.addEventListener('mouseleave', function() {
		message.style.display = 'none';
	});
}

function copyText4() {
	navigator.clipboard.writeText(`move = ['a3','a4','b3','b4','c3','c4','d3','d4','e3','e4','f3','f4','g3','g4','h3','h4','Nf3','Nb3','Na3','Nh3']
squares = [[2,7],[3,7],[2,6],[3,6],[2,5],[3,5],[2,4],[3,4],[2,3],[3,3],[2,2],[3,2],[2,1],[3,1],[2,0],[3,0],
           [2,2],[2,6],[2,7],[2,0]]
values = [sum(1 for i in whitegames if i['moves'].split()[0] == m) for m in move]
data = np.zeros([8, 8])
data[[s[0] for s in squares], [s[1] for s in squares]] = values
data_avg = data/sum(sum(data))
x_axis_labels = ['h','g','f','e','d','c','b','a']
y_axis_labels = [*range(1,9)]
plt.gcf().set_facecolor('#333333')
plt.gca().set_facecolor('#333333') 
ax = sns.heatmap(data_avg, square=True, xticklabels=x_axis_labels, yticklabels=y_axis_labels, cmap=cmap, 
                 linewidth=0.5, cbar_kws={'label': 'Move Frequency'}) 
plt.title('Opening Moves by Me as White', color='white') 
ax.set_xlabel('File', color='white') 
ax.set_ylabel('Rank', color='white')
ax.invert_xaxis()
ax.invert_yaxis()
ax.tick_params(colors='white')
colorbar = ax.collections[0].colorbar
colorbar.set_label('Move Frequency', color='white')
colorbar.ax.yaxis.set_tick_params(color='white')
plt.setp(colorbar.ax.get_yticklabels(), color='white') 
plt.savefig('openings2.png')
plt.show()`);

	var container = document.querySelector('#copy4');
	var message = container.querySelector('.copyMessage');
	var button = container.querySelector('.copyButton');

	message.style.display = 'inline';
	button.addEventListener('mouseleave', function() {
		message.style.display = 'none';
	});
}

function copyText5() {
	navigator.clipboard.writeText(`letters = ['a','b','c','d','e','f','g','h']
move = [i + str(j) for i in letters for j in range(1, 9)]
values = [0]*64
squares = [[i, x] for x in range(7, -1, -1) for i in range(8)]

for x in blackgames:
    if x['status'] == 'mate' and x['winner'] == 'white':
        y = list(x['moves'].split(' '))[1::2]
        king = 0
        for i in y:
            if i[0] == 'K':
                king = i[-2:]
            elif i == 'O-O':
                king = 'g8'
            elif i == 'O-O-O':
                king = 'c8'
        for m,v in zip(move,range(64)):
            if m == king:
                values[v] += 1
        if king == 0:
            values[39] += 1
            
data = np.zeros([8,8])
data[[s[0] for s in squares], [s[1] for s in squares]] = values
x_axis_labels = ['h','g','f','e','d','c','b','a']
y_axis_labels = [*range(1,9)]
plt.gcf().set_facecolor('#333333')
plt.gca().set_facecolor('#333333') 
data = data/(sum(sum(data)))
ax = sns.heatmap(data, square=True, xticklabels=x_axis_labels, yticklabels=y_axis_labels, cmap=cmap, 
                 linewidth=0.5, cbar_kws={'label': 'Move Frequency'}) 
plt.title('Square of My King at Checkmate, Black Pieces.', color = 'white')
ax.set_xlabel('File', color='white') 
ax.set_ylabel('Rank', color='white')
ax.tick_params(colors='white')
colorbar = ax.collections[0].colorbar
colorbar.set_label('Move Frequency', color='white')
colorbar.ax.yaxis.set_tick_params(color='white')
plt.setp(colorbar.ax.get_yticklabels(), color='white') 
plt.savefig('blackmate.png')
plt.show()`);

	var container = document.querySelector('#copy5');
	var message = container.querySelector('.copyMessage');
	var button = container.querySelector('.copyButton');

	message.style.display = 'inline';
	button.addEventListener('mouseleave', function() {
		message.style.display = 'none';
	});
}

function copyText6() {
	navigator.clipboard.writeText(`letters = ['a','b','c','d','e','f','g','h']
move = [i + str(j) for i in letters for j in range(1, 9)]
values = [0]*64
squares = [[i, x] for x in range(7, -1, -1) for i in range(8)]
        
for x in whitegames:
    if x['status'] == 'mate' and x['winner'] == 'black':
        y = list(x['moves'].split(' '))[0::2]
        king = 0
        for i in y:
            if i[0] == 'K':
                king = i[-2:]
            elif i == 'O-O':
                king = 'g1'
            elif i == 'O-O-O':
                king = 'c1'
        for m,v in zip(move,range(64)):
            if m == king:
                values[v] += 1
        if king == 0:
            values[32] += 1
            
data = np.zeros([8,8])
data[[s[0] for s in squares], [s[1] for s in squares]] = values
x_axis_labels = ['h','g','f','e','d','c','b','a']
y_axis_labels = [*range(1,9)]
plt.gcf().set_facecolor('#333333')
plt.gca().set_facecolor('#333333') 
data = data/(sum(sum(data)))
ax = sns.heatmap(data, square=True, xticklabels=x_axis_labels, yticklabels=y_axis_labels, cmap=cmap, 
                 linewidth=0.5, cbar_kws={'label': 'Move Frequency'})
plt.title('Square of My King at Checkmate, White Pieces.', color = 'white')
ax.set_xlabel('File', color='white') 
ax.set_ylabel('Rank', color='white')
ax.tick_params(colors='white')
colorbar = ax.collections[0].colorbar
colorbar.set_label('Move Frequency', color='white')
colorbar.ax.yaxis.set_tick_params(color='white')
plt.setp(colorbar.ax.get_yticklabels(), color='white')
ax.invert_xaxis()
ax.invert_yaxis()
plt.savefig('whitemate.png')
plt.show()`);

	var container = document.querySelector('#copy6');
	var message = container.querySelector('.copyMessage');
	var button = container.querySelector('.copyButton');

	message.style.display = 'inline';
	button.addEventListener('mouseleave', function() {
		message.style.display = 'none';
	});
}


