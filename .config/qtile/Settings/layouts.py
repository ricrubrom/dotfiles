from libqtile import layout
from .pallete import colors
# L A Y O U T S

layouts = [
    layout.Columns( margin= [10,10,10,10], border_focus=colors[0],
	    border_normal=colors[0],
        border_width=0,
    ),

    layout.Max(	border_focus=colors[0],
	    border_normal=colors[0],
	    margin=10,
	    border_width=0,
    ),

    layout.Floating(	border_focus=colors[0],
	    border_normal=colors[0],
	    margin=10,
	    border_width=0,
	),
    # Try more layouts by unleashing below layouts
   #  layout.Stack(num_stacks=2),
   #  layout.Bsp(),
     layout.Matrix(	border_focus=colors[0],
	    border_normal=colors[0],
	    margin=10,
	    border_width=0,
	),
     layout.MonadTall(	border_focus=colors[0],
	    border_normal=colors[0],
        margin=10,
	    border_width=0,
	),
    layout.MonadWide(	border_focus=colors[0],
	    border_normal=colors[0],
	    margin=10,
	    border_width=0,
	),
   #  layout.RatioTile(),
     layout.Tile(	border_focus=colors[0],
	    border_normal=colors[0],
    ),
   #  layout.TreeTab(),
   #  layout.VerticalTile(),
   #  layout.Zoomy(),
]
