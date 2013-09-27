jQuery.followMe
===============

Make elements follow the cursor.

## Initialization examples

    follow=$('#element').followMe();
    follow=$('#element').followMe({align: 'left top'});
    follow=$('#element').followMe({distance: '5 8'});
    follow=$('#element').followMe({align: 'left top', distance: '5 8'});
    
## Options

* **align** - Default: 'center center' - How to align the element relative to the cursor. The first word is where to align it horizontally ('left', 'right', or 'center'). The last word is where to align it vertically ('top', 'bottom', or 'center').
* **distance** - Default: '0 0' - Distance to displace after alignment. The first integer is how far to displace horizontally (positive integer: move right; negative integer: move left; zero: don't move). The second integer is how far to displace vertically (positive integer: move down; negative integer: move up; zero: don't move). If only one number is defined, that number is applied to both horizontal and vertical displacement (ex: '5' is equal to '5 5'; '-5' is equal to '-5 -5').

## Methods

    follow.stop();
    follow.start();

* **stop()** - Stops following the cursor.
* **start()** - Starts following the cursor again.

If you need to change the options of the element, you can simple reinitialize as you would under *Initialization examples* above.

## License: Public Domain
Please don't rename it or change credit away from me, James Anthony Bruno, because that would make me sad. It is fine, however, to make changes to followMe's core to suit your needs for use in your products (whether commercial, personal, or non-profit). If you believe you've found a better way for followMe to work, go ahead and message me and let me know! I would love to implement your fix. 
