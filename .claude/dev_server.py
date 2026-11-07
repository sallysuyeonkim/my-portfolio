# 로컬 미리보기용 서버: 브라우저가 옛날 파일을 기억하지 않도록 캐시를 끈다.
import http.server

class NoCacheHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store, must-revalidate")
        super().end_headers()

if __name__ == "__main__":
    http.server.ThreadingHTTPServer(("", 8000), NoCacheHandler).serve_forever()
