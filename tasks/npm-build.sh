#!/usr/bin/env bash


# author config
author_name="boriz-baatsen-animator"
project_name="bb-portfolio-2026"

# directory config
root_dir="/Users/$USER/Projects/Builds"
source_dir="$(cd -P "$(dirname "$0")/.." && pwd)"
target_dir="$root_dir/$author_name/$project_name"


# get version number
version="$(npm pkg get version --prefix "$source_dir" | tr -d '"')"
target_version_dir="$target_dir/v$version"

# create target folder
mkdir -p "$target_dir"
rm -rf "$target_version_dir"

# build and move distribution
npm run build --prefix "$source_dir"
mv "$source_dir/dist" "$target_version_dir"
ln -sfn "$target_version_dir" "$source_dir/dist"