<template>
  <div>
    <el-container style="height: 500px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: white">
        <el-menu :default-openeds="['1']" @select="handleSelect">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-message"></i>学校概况
            </template>
            <el-menu-item-group>
              <el-menu-item index="11">学校简介</el-menu-item>
              <el-menu-item index="12">标志意义</el-menu-item>
              <el-menu-item index="13">学校风光</el-menu-item>
              <el-menu-item index="14">精神理念</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-main>
          <div v-if="now_content_index==11">
            <p>历史沿革</p>
            <div
              class="show_content"
            >1984年，因公烧伤的胡大白在病床上了解到，河南作为人口大省，高等教育资源极为紧缺，老百姓的孩子希望上大学的愿望强烈，社会发展急需大批专门应用型人才，胸怀“为国分忧，为民解愁，为社会主义现代化建设服务”的崇高理想，她拿出家中仅有的30元钱创办了郑州高等教育自学考试辅导班。1985年，经郑州市教委批准，郑州高等教育自学考试辅导班更名为黄河科技专科学校。1989年，经河南省教委批准，黄河科技专科学校更名为郑州黄河科技大学。1994年，经国家教委批准建立民办黄河科技学院，学校成为全国第一所实施专科学历教育的民办高校。2000年，经教育部批准成为全国第一所实施本科学历教育的民办高校。2004年，学校取得学士学位授予权；时任河南省委书记的李克强视察学校时，称赞学校“用较短的时间，走完了可能是很多学校多年走不完的历史”。</div>
            <div
              class="show_content"
            >2008年，学校以“良好”等级通过教育部普通高等学校本科教学工作水平评估。2013年，被教育部批准为全国首批“应用科技大学改革试点战略研究单位”，并成为中国应用技术大学联盟的首批成员。学校发展史被联合国教科文组织官员称为“世界教育史上的奇迹”，两次被美国弗吉尼亚大学商学院写进案例。办学业绩被中央电视台、《人民日报》《华盛顿邮报》等中外著名媒体多次报道。学校董事长胡大白教授荣膺首届“中国当代教育名家”，第十届全国人大代表，兼任中国民办教育协会监事会主席、河南省民办教育协会会长。校长杨雪梅教授荣获“全国五一劳动奖章”“全国五一巾帼奖章”等荣誉称号，先后当选第十二届、十三届全国人大代表，任中国民办教育协会副会长、河南省高校创新创业协会会长等。</div>
            <p>办学条件</p>
            <div
              class="show_content"
            >学校现有四个校区，占地2300多亩，校舍建筑面积100多万平方米，被评为“河南省绿化先进单位”“河南省高等学校标准化学生食堂”“河南省高等学校智慧校园建设试点单位”等。现有全日制本科在校生24674人。教职工1805人，其中专任教师1377人，高级职称的教师占46.48%，青年教师中79.67%具有研究生以上学历，双师双能型教师373人，中国工程院院士、享受国务院政府特殊津贴专家、教育部新世纪优秀人才、国家级教学成果奖获得者、国家和省级教学名师、教育部全国首批万名优秀创新创业导师、省级学术技术带头人、“中原百人计划”专家、河南省优秀教师等荣誉教师150余人，担任河南省电子学会、省工程图学学会等学会会长教师5人。学校建有河南省院士工作站、博士后研发基地、重点实验室、国际联合实验室、工程技术研究中心、实验教学示范中心等高层次教学科研平台50余个。各科类实验室127个，实验分室410个，校外实训基地224个；教学科研仪器总值3.29亿元；馆藏图书355.6万册。</div>
            <p>学科专业</p>
            <div
              class="show_content"
            >学校紧贴经济社会发展需求，形成了工科优势突出、学科链与产业链关联度高、学科布局对地方主导产业支撑度强的办学优势。学校设有工、理、文、医、管理、经济、法、教育、艺术等9大学科门类；开设67个本科专业和35个专科专业。人工智能、材料、机械、自动化、文化创意等一批优势学科专业，凸显了对区域及河南省经济转型、产业升级的支撑作用。学校重点建设了电子信息与计算机类、机械与材料类、生物医药类、文化创意类、经济管理类等特色专业集群。现有省级重点学科5个，河南省特色专业6个，河南省民办教育品牌专业9个，河南省专业综合改革试点专业8个，河南省本科工程教育人才培养模式改革试点专业1个。学校拥有的省级重点学科、特色品牌专业数量居全省民办高校首位。</div>
          </div>
          <div class="index12" v-if="now_content_index==12">
            <img src="http://www.hhstu.edu.cn/2012images/logo1.png" alt>
            <div>黄河科技学院，一轮喷薄欲出的太阳</div>
            <div>一轮充满生机活力的朝阳</div>
            <div>从一片美丽富饶的土地上喷薄欲出</div>
            <div>以其敢向历史挑战、敢向未来宣战、敢为天下先的勇气和胆略</div>
            <div>昭示着黄河科技大学辉煌事业的崛起以及无限壮丽的广阔前景</div>
            <div>图中倾斜并列的三道线，所显示的光芒感、速度感</div>
            <div>表现了黄科大人以质量求发展、以效率为生命、以信誉为保证</div>
            <div>肩负着科教兴国的历史使命</div>
            <div>奋力拼搏、勇往直前的精神风貌</div>
          </div>
          <div class="index13" v-if="now_content_index==13">
            <div>
              <img src="http://pic.hhstu.edu.cn/wfr_upload/small_2018522165020734.jpg" alt>
              <span>大数据学院</span>
            </div>
            <div>
              <img src="http://pic.hhstu.edu.cn/wfr_upload/small_2018523101019734.jpg" alt>
              <span>信息大楼</span>
            </div>
            <div>
              <img src="http://pic.hhstu.edu.cn/wfr_upload/small_2018523101158734.jpg" alt>
              <span>全景</span>
            </div>
            <div>
              <img src="http://pic.hhstu.edu.cn/wfr_upload/small_20185231578734.jpg" alt>
              <span>学生公寓</span>
            </div>
            <div>
              <img src="http://pic.hhstu.edu.cn/wfr_upload/small_2018523151450734.jpg" alt>
              <span>塑胶跑道</span>
            </div>
            <div>
              <img src="http://pic.hhstu.edu.cn/wfr_upload/small_2018523152141734.jpg" alt>
              <span>学术报告厅</span>
            </div>
          </div>
          <div class v-if="now_content_index==14"><p>办学宗旨</p>
          <div class="show_content">为国分忧，为民解愁，为社会主义现代化建设服务</div>
          <p>学校愿景</p>
          <div class="show_content">办一所对学生最负责任的大学</div>
          <p>办学方针</p>
          <div class="show_content">以提高教学质量为中心</div>
            <div class="show_content">以提高管理水平为手段</div>
            <div class="show_content">以加强思想政治工作为保证</div>
          <p>学校精神</p>
          <div class="show_content">开拓、拼搏、实干、奉献</div>
          <p>师生座右铭</p>
          <div class="show_content">敢为天下先</div>
          <p>校训</p>
          <div class="show_content">厚德博学，砺志图强</div>
          <p>战略口号</p>
          <div class="show_content">打硬仗 上台阶 创特色 争名牌</div>
          <p>学校类型定位</p>
          <div class="show_content">教学型”高校</div>
                    <p>重点学科定位</p>
          <div class="show_content">工科、商科</div>
          <p>服务面向定位</p>
          <div class="show_content">立足河南，辐射中原;面向地方、面向基层、面向经济建设第一线</div>
          <p>人才培养目标</p>
          <div class="show_content">高素质应用型人才</div></div>
          
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<style>
p {
  text-align: left;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
.school_survey_title {
  line-height: 0;
}
.show_content {
  font-size: 13px;
  text-align: left;
  text-indent: 2em;
  margin-bottom: 10px;
}
.index12 div {
  margin-bottom: 10px;
  font-size: 13px;
}
.index13 div {
  width: 30%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
}
.index13 div img {
  width: 100%;
}
.index13 {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}
</style>

<script>
export default {
  data() {
    return {
      now_content_index: 11
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      this.now_content_index = Number(key);
    }
  }
};
</script>