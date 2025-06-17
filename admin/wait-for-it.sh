#!/usr/bin/env bash
# wait-for-it.sh: wait until a host:port is available (TCP)

set -e

host="$1"
port="$2"
shift 2
cmd="$@"

echo "Waiting for $host:$port..."

while ! nc -z "$host" "$port"; do
  sleep 0.5
done

echo "$host:$port is available – running command: $cmd"
exec $cmd
