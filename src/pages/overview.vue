<template>
  <div id="overview">
    <bread-crumb></bread-crumb>
    <div id="content">
      <Row :gutter="16">
        <Col span="6">
          <div>
            <Card>
              <div style="text-align:center">
                <span class="total">18</span>
                <h3>待审核课程</h3>
              </div>
            </Card>
          </div>
        </Col>
        <Col span="6">
          <div>
            <Card>
              <div style="text-align:center">
                <span class="total">18</span>
                <h3>待审核评论</h3>
              </div>
            </Card>
          </div>
        </Col>
        <Col span="6">
          <div>
            <Card>
              <div style="text-align:center">
                <span class="total">18</span>
                <h3>待审核用户</h3>
              </div>
            </Card>
          </div>
        </Col>
        <Col span="6">
          <div>
            <Card>
              <div style="text-align:center">
                <span class="total">18</span>
                <h3>待讲授课程</h3>
              </div>
            </Card>
          </div>
        </Col>
      </Row>
      <Row class="rank">
        <Col span="11">
          <Card>
            <p slot="title">待讲课程 Top 10</p>
            <p>《中国文学史》</p>
            <p>《世界历史》</p>
            <p>《近代物理》</p>
          </Card>
        </Col>
        <Col span="11" offset="2">
          <Card>
              <p slot="title">明星讲师 Top 10</p>
              <p>卡片内容</p>
              <p>卡片内容</p>
              <p>卡片内容</p>
          </Card>
        </Col>
      </Row>
    </div>
  </div>
</template>
<script>
import breadCrumb from '../components/breadCrumb'
export default {
  components: {
    breadCrumb
  }
}
</script>
