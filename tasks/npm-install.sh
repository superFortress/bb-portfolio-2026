#!/usr/bin/env bash
set -e


# project config
author_name="boriz-baatsen-animator"
project_name="bb-portfolio-2026"

# directory config
root_dir="/Users/$USER/Projects/Dependencies"
source_dir="$(cd -P "$(dirname "$0")/.." && pwd)"
target_dir="$root_dir/$author_name/$project_name"


push_package_files() {
    mkdir -p "$target_dir"
    cp "$source_dir/package.json" "$target_dir"
    cp "$source_dir/package-lock.json" "$target_dir"
}

pull_package_files() {
    cp "$target_dir/package.json" "$source_dir"
    cp "$target_dir/package-lock.json" "$source_dir"
}

restore_symlink() {
    ln -sfn "$target_dir/node_modules" "$source_dir/node_modules"
}

validate_library() {
    local library_name="$1"
    if [[ -z "$library_name" ]]; then
        echo "No library provided. Exiting."
        exit 1
    fi
}


# user input
echo "Pick an option:"
echo "[1] Install package"
echo "[2] Audit package"
echo "[3] Audit fix package"
echo "[4] Install library..."
echo "[5] Uninstall library..."
echo "[6] Restore symlink"
read -n1 -s answer
echo


case "$answer" in

    # install package
1)
    push_package_files
    npm ci --prefix "$target_dir"
    pull_package_files
    restore_symlink
    ;;

    # audit package
2)
    push_package_files
    npm audit --prefix "$target_dir"
    ;;

    # audit fix package
3)
    push_package_files
    npm audit fix --prefix "$target_dir"
    pull_package_files
    restore_symlink
    ;;

    # install library
4)
    push_package_files
    read -rp "Which library would you like to install? " library
    validate_library "$library"
    npm install "$library" --prefix "$target_dir"
    pull_package_files
    restore_symlink
    ;;

    # uninstall library
5)
    push_package_files
    read -rp "Which library would you like to uninstall? " library
    validate_library "$library"
    npm uninstall "$library" --prefix "$target_dir"
    pull_package_files
    restore_symlink
    ;;

    # restore symlink
6)
    restore_symlink
    ;;

    # reject incompatible answer
*)
    echo "Invalid selection. Exiting."
    exit 1
    ;;

esac