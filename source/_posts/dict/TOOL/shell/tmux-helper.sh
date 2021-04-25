# https://zhuanlan.zhihu.com/p/146544540
# https://liam.page/2016/09/10/tmux-plugin-resurrect/
# https://linuxtoy.org/archives/tmux-resurrect-and-continuum.html
if [ -f ~/.tmux ];then 
    mv ~/.tmux ~/.tmux.conf
fi

git clone https://github.com/tmux-plugins/tpm ~/.tmux/plugins/tpm
git clone https://github.com/tmux-plugins/tmux-resurrect.git ~/.tmux/plugins/tmux-resurrect

echo -e "
set -g mode-mouse on
set -g mouse-resize-pane on
set -g mouse-select-pane on
set -g mouse-select-window on

set -g @plugin 'tmux-plugins/tpm'
set -g @plugin 'tmux-plugins/tmux-resurrect'
set -g @plugin 'tmux-plugins/tmux-continuum'

set -g @continuum-save-interval '15'
set -g @continuum-restore 'on'

set -g @plugin 'tmux-plugins/tmux-resurrect'
# tmux-resurrect
set -g @resurrect-save-bash-history 'on'
set -g @resurrect-capture-pane-contents 'on'
set -g @resurrect-strategy-vim 'session'
# set -g @resurrect-save 'S'
# set -g @resurrect-restore 'R'

set -g @plugin 'tmux-plugins/tmux-continuum'
set -g @continuum-restore 'on'
set -g @continuum-save-interval '1'

# Other config ...

run -b '~/.tmux/plugins/tpm/tpm'
# run -b '~/.tmux/plugins/tmux-resurrect/resurrect.tumx'
" >> ~/.tmux.conf

tmux source ~/.tmux.conf
