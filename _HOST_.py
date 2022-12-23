import json
from http.server import HTTPServer, BaseHTTPRequestHandler

import random

GLOBALHTML=open(__file__.replace('_HOST_.py','index_onefile.html'),'r').read()

class RequestHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        # Send response status code
        self.send_response(200)

        
        self.send_header('Content-type','text/html')
        self.end_headers()
        
        html=GLOBALHTML
        self.wfile.write(html.encode())
        
        
        """# Send headers
        self.send_header('Content-type', 'application/json')
        self.end_headers()

        # Send response body
        response = {"value": [random.randint(-2**31+1,2**31-1) for _ in range(10)]}
        self.wfile.write(json.dumps(response).encode())"""
        

httpd = HTTPServer(('192.168.2.70', 8001), RequestHandler)
httpd.serve_forever()