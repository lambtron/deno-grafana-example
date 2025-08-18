# Deno Grafana Example

This repo accompanies
[this blog post](https://grafana.com/blog/2025/08/15/integrating-deno-and-grafana-cloud-how-to-observe-your-javascript-project-with-zero-added-code/).

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

## Resources

- [Zero-config Debugging with Deno and OpenTelemetry](https://deno.com/blog/zero-config-debugging-deno-opentelemetry)
- [How to get deep traces in your Node.js backend with OTel and Deno](https://deno.com/blog/otel-tracing-in-node-and-deno)
- [Documentation](https://docs.deno.com/runtime/fundamentals/open_telemetry/)
- [How to setup OTel with Deno](https://docs.deno.com/examples/basic_opentelemetry_tutorial/)
- [How to setup Deno and Grafana Cloud](https://docs.deno.com/examples/grafana_tutorial/)
