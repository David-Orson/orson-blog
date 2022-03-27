// npm
import React from "react";

// mui
import Typography from "@mui/material/Typography";

// assets
const vimLogo = require("../../../../assets/vim-logo.png");

const BattleToVim = () => {
    return (
        <div>
            <div className="pt-4">
                <Typography variant="h2">The Battle to Vim</Typography>
            </div>
            <div>
                <img src={vimLogo} />
            </div>
            <div className="pt-4">
                <Typography variant="body1">
                    Vim is a text editor for terminals but can also be used as
                    an extension for VSCode. In Vim, we navigate using the
                    keyboard instead of the mouse. It was based on the original
                    Unix text editor called VI but comes with improvements,
                    hence the name VI improved (Vim)
                </Typography>
            </div>
            <div className="pt-4">
                <Typography variant="body1">
                    Vim is used for efficient coding over typical editors like
                    VScode with the basic philosophy that the more you use the
                    mouse, the less efficient you are as the switching between
                    interface mediums costs time. So the goal of a learning Vim
                    is to learn to do everything with the keyboard that you
                    would already do with the mouse.
                </Typography>
            </div>
            <div className="pt-4">
                <Typography variant="body1">
                    So we typically agree that learning to Vim would improve our
                    productivity over time, especially as Vim is likely to see
                    longevity, as opposed to the latest JavaScript framework.
                    This makes Vim a worthwhile investment in a development
                    career, one investment which I have recently started. This
                    blog is actually the first project I am writing completely
                    in linux (wsl2) and Vim.
                </Typography>
            </div>
            <div className="pt-4">
                <Typography variant="body1">
                    Despite it's obvious strengths, Vim has one serious drawback
                    which I am currently fighting through: Vim has a very steep
                    learning curve. This means that most people who decide to
                    begin their Vim adventure will see productivity decreases
                    for some time before they start to reap the efficiency
                    benefits. I can say though, that learning Vim so far has
                    been gratifying, I feel more competent with my machine and I
                    have only been using Vim briefly over the past 2 weeks.
                </Typography>
            </div>
            <div className="pt-4">
                <Typography variant="body1">
                    I recently have made a concerted push towards improving my
                    competency with my laptop, I have been working on my touch
                    typing (and speed), have been using wsl2, using keyboard
                    shortcuts more generally on my machine for view switching
                    and opening/closing chrome tabs and of course, Vim. I
                    believe that I am not yet as capable with the keyboard as
                    opposed to the mouse but I can see my efficiency gains grow
                    over time, giving a clear prediction that this will pay off
                    in the future. Plus, honestly, it feels pretty awesome to
                    improve these skills, I feel like I am becoming a true super
                    user of my machine, maybe one day soon I will even use Arch.
                </Typography>
            </div>
            <div className="pt-4">
                <Typography variant="body1">
                    So with my recent work, I have experienced many of the
                    common pitfalls with using Vim and I have compiled all of my
                    solutions and improvements I have integrated into my
                    process. So with no further ado let's get into some of the
                    things I've learned.
                </Typography>
            </div>
            <div className="pt-4">
                <Typography variant="h4">The Basics</Typography>
            </div>
            <div className="pt-4">
                <Typography variant="body1">
                    Now, the first thing a new Vim user gets told about
                    navigation is to use the hjkl keys for left down up right
                    respectively, but for me this didn't make much sense. For
                    one, with touch typing we want to keep the fingers of our
                    right hand on the home row of jkl;, so I orginally wondered
                    if I should remap the keys, but there is more to consider. I
                    actually try to use h and l minimally and focus on lateral
                    movement using w e and b. so then it feels like my left hand
                    is for lateral movement and my right hand primarily is for
                    vertical movement.
                </Typography>
            </div>
            <div className="pt-4">
                <Typography variant="body1">
                    Another common issue I found is that often when I am at the
                    end of a word after using the e key and I want to insert,
                    the cursor is place one position to the left. so often
                    instead of using 'i' to change to insert mode, I will use
                    the 'a' key instead to insert after, this means I often
                    press 'ea' to insert after the next work.
                </Typography>
            </div>
            <div className="pt-4">
                <Typography variant="body1">
                    A common mistake I have made whislt using VSCode so much is
                    to use CTRL + S to save my work, while you may already know
                    that ':w' in normal mode is to save, if you do happen to
                    accidentally hit CTRL + S then pressing CTRL + Q should
                    return you to normal mode.
                </Typography>
            </div>
            <div className="pt-4">
                <Typography variant="body1">
                    I recommend getting a plugin like nerdtree to have a sidebar
                    similar to how you would use one in VSCode, also I recommend
                    you learn how to use tmux I will write about my Vim setup
                    another time, I will also write about tmux another time.
                </Typography>
            </div>
            <div className="pt-4">
                <Typography variant="body1">
                    It is important that you make the most of the keybindings
                    that Vim has to offer, and I think one of the most important
                    functionalities is to copy and paste. In Vim, we select the
                    text we want to copy using the 'v' key to change to visual
                    mode, once we have highlighted the text we press the 'y' key
                    to 'yank' the text, this is essentially the same as copying.
                    Then to paste, we move our cursor one to the left of where
                    we want to insert the text and press 'p'. Make sure when you
                    are highlighting the text in visual mode that you do not
                    highlight the last character that you want to copy, yanking
                    copies the highlighted text and the character after the
                    highlighted.
                </Typography>
            </div>
            <div className="pt-4">
                <Typography variant="body1"></Typography>
            </div>
            <div className="pt-4">
                <Typography variant="body1"></Typography>
            </div>
            <div className="pt-4">
                <Typography variant="body1"></Typography>
            </div>
        </div>
    );
};

export default BattleToVim;
