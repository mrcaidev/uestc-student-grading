# 电子科技大学自动学生评教

电子科技大学教务系统学生评教自动化脚本。

> [!WARNING]
>
> 如果评教界面更新，这些脚本可能失效。
>
> 但由于作者已经毕业，无法进入教务系统，也就无法亲自调试、更正并维护这些脚本。
>
> 如果有愿意维护这些脚本的同学，欢迎您提交 [Issue](https://github.com/mrcaidev/uestc-student-grading/issues) 或 [PR](https://github.com/mrcaidev/uestc-student-grading/pulls)。

## 📚 使用方法

打开浏览器的开发人员工具，进入“控制台”标签页，将对应的脚本代码粘贴上去，按回车即可执行。

## 🔍 脚本说明

### 1. 课程评价

> [1-course.js](https://github.com/mrcaidev/uestc-student-grading/blob/master/1-course.js)

脚本将列表最开始的 n 门课程评为 5 星，其余的评为 4 星，并点击“下一步”按钮。

注：n 默认为 4，可以通过修改 `fiveStarsNum` 变量的值来调整。

### 2. 教材评价

> [2-coursebook.js](https://github.com/mrcaidev/uestc-student-grading/blob/master/2-coursebook.js)

脚本勾选所有选择题的第一项，也就是最高评价，并点击“确认”按钮。

注：用户需要先手动进入每一本教材的评价页面。

### 3. 教师评价

> [3-teacher.js](https://github.com/mrcaidev/uestc-student-grading/blob/master/3-teacher.js)

脚本将所有教师评为 5 星，勾选所有复选框，在文字评价栏内填入“教学态度好，教学内容吸引人”，并点击“下一步”或“确认”按钮。

## 💳 许可证

[MIT](https://github.com/mrcaidev/uestc-student-grading/blob/master/LICENSE)
