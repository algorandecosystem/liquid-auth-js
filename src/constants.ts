/**
 * Module For Defaults
 *
 *
 * @packageDocumentation
 * @protected
 */

import type { QRCodeToDataURLOptions } from 'qrcode';

/**
 * DEFAULT_FETCH_OPTIONS is a constant object used as a default configuration
 * for HTTP fetch requests. It defines the HTTP method and headers settings
 * to ensure consistent and appropriate behavior across network requests.
 *
 * The object specifies the following:
 * - `method`: The HTTP method to be used for the request, set to 'POST' by default.
 * - `headers`: A set of HTTP headers, including 'Content-Type', which is set
 *   to 'application/json' to indicate that the request body is formatted as JSON.
 *
 * This configuration is intended to simplify the process of making
 * standardized fetch requests and can be extended or overridden
 * based on the application's specific requirements.
 *
 * @internal
 */
export const DEFAULT_FETCH_OPTIONS = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
};

export const DEFAULT_QR_CODE_OPTIONS: QRCodeToDataURLOptions = {
  width: 500,
  margin: 4,
  color: {
    dark: '#332257',
    light: '#ffffff',
  },
};
