#!/usr/bin/env bash


# author config
author_name="boriz-baatsen-animator"
project_name="bb-portfolio-2026"

# directory config
root_dir="/Users/$USER/Projects/Dependencies"
source_dir="$(cd -P "$(dirname "$0")/.." && pwd)"
target_dir="$root_dir/$author_name/$project_name"


# user input
echo "Pick an option:"
echo "[1] Install package"
echo "[2] Audit package"
echo "[3] Audit fix package"
echo "[4] Install library..."
echo "[5] Uninstall library..."
echo "[6] Restore symlink"
read -n1 -s answer


case "$answer" in

    # install package
1)
    mkdir -p "$target_dir"
    rm -rf "$target_dir/node_modules"
    cp "$source_dir/package.json" "$target_dir"
    cp "$source_dir/package-lock.json" "$target_dir"
    npm install --prefix "$target_dir"
    ;;

    # audit package
2)
    npm audit --prefix "$target_dir"
    ;;

    # audit fix package
3)
    npm audit fix --prefix "$target_dir"
    ;;

    # install library
4)
    read -rp "Which library would you like to install? " library
    npm install "$library" --prefix "$target_dir"
    ;;

    # uninstall library
5)
    read -rp "Which library would you like to uninstall? " library
    npm uninstall "$library" --prefix "$target_dir"
    ;;

    # reject incompatible answer
*)
    echo "Invalid selection. Exiting."
    exit 1
    ;;

esac


# copy new json back to source
cp "$target_dir/package.json" "$source_dir"
cp "$target_dir/package-lock.json" "$source_dir"
ln -sfn "$target_dir/node_modules" "$source_dir/node_modules"