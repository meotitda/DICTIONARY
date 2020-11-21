# source git_configure.sh
#

echo ""
echo "Configuring git..."
echo "Write your git username"
read USER
DEFAULT_EMAIL="$USER@users.noreply.github.com"
read -p "Write your git email [Press enter to accept the private email $DEFAULT_EMAIL]: " EMAIL
EMAIL="${EMAIL:-${DEFAULT_EMAIL}}"

echo "Configuring global user name and email..."
git config --global user.name "$USER"
git config --global user.email "$EMAIL"

echo "Configuring global aliases..."
git config --global alias.ci commit
git config --global alias.st status
git config --global alias.sub "submodule update --remote --merge"
git config --global core.editor "vim"
git config --global credential.helper 'cache --timeout=36000'

read -r -p "Do you want to add ssh credentials for git? [y/n] " RESP
RESP=${RESP,,}    # tolower (only works with /bin/bash)
if [[ $RESP =~ ^(yes|y)$ ]]
then
    echo "Configuring git ssh access..."
    ssh-keygen -t rsa -b 4096 -C "$EMAIL"
    echo "This is your public key. To activate it in github, got to settings, SHH and GPG keys, New SSH key, and enter the following key:"
    cat ~/.ssh/id_rsa.pub
    echo ""
    echo "To work with the ssh key, you have to clone all your repos with ssh instead of https. For example, for this repo you will have to use the url: git@github.com:miguelgfierro/scripts.git"
fi

if [ "$(uname)" == "Darwin" ]; then # Mac OS X platform  
	echo "Setting autocompletion"
	AUTOCOMPLETION_URL="https://raw.githubusercontent.com/git/git/master/contrib/completion/git-completion.bash"
	AUTOCOMPLETION_PATH=/opt/local/etc/bash_completion.d
	AUTOCOMPLETION_SCRIPT=git-completion.bash 
	sudo mkdir -p $AUTOCOMPLETION_PATH
	sudo curl  -o $AUTOCOMPLETION_PATH/$AUTOCOMPLETION_SCRIPT $AUTOCOMPLETION_URL
	source $AUTOCOMPLETION_PATH/$AUTOCOMPLETION_SCRIPT
	echo "source $AUTOCOMPLETION_PATH/$AUTOCOMPLETION_SCRIPT" >> ~/.bash_profile
fi
echo ""
echo "git configured"

# @see http://stubbisms.wordpress.com/2009/07/10/git-script-to-show-largest-pack-objects-and-trim-your-waist-line/
# @author Antony Stubbs
# modified by @miguelgfierro

# set the internal field spereator to line break, so that we can iterate easily over the verify-pack output
IFS=$'\n';

# list all objects including their size, sort by size, take top 20
objects=`git verify-pack -v .git/objects/pack/pack-*.idx | grep -v chain | sort -k3nr | head -n 20`

echo "All sizes are in MB. The pack column is the size of the object, compressed, inside the pack file."

output="size,pack,SHA,location"
for y in $objects
do
	# extract the size in bytes
	size=$((`echo $y | cut -f 5 -d ' '`/1024/1024))
	# extract the compressed size in bytes
	compressedSize=$((`echo $y | cut -f 6 -d ' '`/1024/1024))
	# extract the SHA
	sha=`echo $y | cut -f 1 -d ' '`
	# find the objects location in the repository tree
	other=`git rev-list --all --objects | grep $sha`
	#lineBreak=`echo -e "\n"`
	output="${output}\n${size},${compressedSize},${other}"
done

echo $output | column -t -s ', '

# This script updates all git repos for a user. The script should be located in a root folder containing each repo folder.
#
USER="hoaphumanoid" 
#declare folders
declare -a arr=("sciblog" "scripts" "twitter_bot")
echo "Git state repos of user $USER ......."
for i in ${arr[@]}
do
	cd $i
	echo "STATE REPO: $i"
	git status 
	cd ..
done