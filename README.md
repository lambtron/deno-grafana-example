# Deno Grafana Example

This repo accompanies this blog post.

## Install

```bash
deno install
```

This will install dependencies.

## How to run

Start the API server:

```bash
deno task start
```

Execute fetch:

```bash
deno task fetcher
```

Start Otel LGTM stack:

```bash
docker run --name lgtm -p 3000:3000 -p 4317:4317 -p 4318:4318 --rm -ti \
    -v "$PWD"/lgtm/grafana:/data/grafana \
    -v "$PWD"/lgtm/prometheus:/data/prometheus \
    -v "$PWD"/lgtm/loki:/data/loki \
    -e GF_PATHS_DATA=/data/grafana \
    docker.io/grafana/otel-lgtm:0.8.1
```
