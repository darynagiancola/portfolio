const CLOUD_PORT_PATH_REGEX = /^\/agents\/[^/]+\/ports\/\d+/

export function getRuntimeBasePath(): string {
  if (typeof window === 'undefined') {
    return import.meta.env.BASE_URL
  }

  if (!import.meta.env.DEV) {
    return import.meta.env.BASE_URL
  }

  const match = window.location.pathname.match(CLOUD_PORT_PATH_REGEX)
  if (!match) {
    return import.meta.env.BASE_URL
  }

  return `${match[0]}/`
}

export function buildInPageHref(fragment: string): string {
  const normalized = fragment.startsWith('#') ? fragment.slice(1) : fragment
  const basePath = getRuntimeBasePath()

  if (basePath === '/' || basePath === '') {
    return `#${normalized}`
  }

  return `${basePath}#${normalized}`
}
