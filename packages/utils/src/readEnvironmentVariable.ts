export function readEnvironmentVariable(key: string) {
  const evValue = process.env[key];

  if (typeof evValue === 'undefined') {
    console.error(
      `[readEnvironmentVariable] Environment variable ${key} is not set`,
    );

    return '';
  }

  return evValue;
}
