class DockerContainerManageService:

  def __init__(self, client):
    self.client = client

  def getContainer(self, name):
    return self.client.containers.get(name)

  def startContainer(self, container):
    container.start()

  def waitFinish(self, container):
    return container.wait()
