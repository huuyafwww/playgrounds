# -*- coding: utf-8 -*-
import falcon, json

class Handler(object):

  def process_resource(self, req, resp, resource, param):
    pass

  def process_request(self, req, resp):
    resp.set_header('Access-Control-Allow-Origin', "*")
    resp.set_header('Access-Control-Allow-Methods', "POST, GET, PUT, PATCH, DELETE")
    resp.set_header('Access-Control-Allow-Headers', "Origin, Authorization, Accept, Content-Type, X-Token")
    resp.set_header('Access-Control-Allow-Credentials', True)
    resp.set_header('Access-Control-Max-Age', '864000')
    resp.set_header('Content-Security-Policy', "frame-ancestors 'none'")
    resp.set_header('X-XSS-Protection', '1; mode=block.')
    resp.set_header('X-Content-Type-Options', 'nosniff')

  def process_response(self, req, resp, resource, req_succeeded):
    # レスポンスステータスコードが200以外の場合
    if not resp.status == falcon.HTTP_200:
      result = {"error": resp.status}
      resp.body = json.dumps(result)
      return

    resp.cache_control = ['private', 'max-age=0', 'no-cache']
    resp.status = falcon.HTTP_200
