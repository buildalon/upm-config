# Buildalon UPM Config

[![Discord](https://img.shields.io/discord/939721153688264824.svg?label=&logo=discord&logoColor=ffffff&color=7389D8&labelColor=6A7EC2)](https://discord.gg/VM9cWJ9rjH) [![marketplace](https://img.shields.io/static/v1?label=&labelColor=505050&message=Buildalon%20Actions&color=FF1E6F&logo=github-actions&logoColor=0076D6)](https://github.com/marketplace?query=buildalon) [![validate](https://github.com/buildalon/upm-config/actions/workflows/validate.yml/badge.svg?branch=main&event=push)](https://github.com/buildalon/upm-config/actions/workflows/validate.yml)

A GitHub Action for setting Unity Engine UPM private scoped registry credentials in CI/CD workflows.

## How to use

### workflow

```yaml
steps:
  - uses: buildalon/upm-config@v1
    with:
      registry-url: 'http://upm.registry.com:4873'
      username: ${{ secrets.UPM_USERNAME }}
      password: ${{ secrets.UPM_PASSWORD }}
```

### inputs

| name | description | required |
| ---- | ----------- | -------- |
| `registry-url` | The URL of the private scoped registry. | true |
| `auth-token` | The authentication token for the private scoped registry. | Required if username and password are not provided. |
| `username` | The username for the private scoped registry. | Required if auth-token is not provided. |
| `password` | The password for the private scoped registry. | Required if auth-token is not provided. |
| `always-auth` | Whether to always authenticate with the private scoped registry. Defaults to `true`. | false |
| `overwrite` | Whether to overwrite the existing configuration file. | false |
