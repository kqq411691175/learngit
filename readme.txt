Git is a version control system.
Git is free software.

git config --global user.name kqq
git config --global user.email 411691175@qq.com

cd desktop
mkdir learngit                ����һ��Ŀ¼
cd learngit                   cd����ǰĿ¼��
pwd                           ������ʾ��ǰĿ¼
git init                      �����Ŀ¼���Git���Թ���Ĳֿ�
ls -ah                        Ŀ¼Ĭ�������صģ���ls -ah����Ϳ��Կ���
git add xxx.txt               ���ļ��ύ���ݴ���
git commit -m "xxxxxx"        ���ļ��ύ���ֿ�
git status                    ���ղֿ⵱ǰ��״̬
git diff readme.txt           �鿴difference

git log --pretty=oneline      ������ʾ���������Զ���ύ��־
git reset --hard HEAD^        ���˵���һ���汾
git reset --hard 3628164      ����ָ���ص�δ����ĳ���汾
cat readme.txt                ����readme.txt������
git reflog                    ������¼���ÿһ������
git checkout --xxx.txt        �����޸��ļ�
git reset HEAD file           ���԰��ݴ������޸ĳ��������·Żع�����
git rm xxx.txt                ɾ���ļ�

git reset HEAD Ȼ�� git checkout --xxx.txt  //����ɾ���ָ��ļ�

git remote add origin git@github.com:kqq411691175/learngit.git//���ع�����GithubԶ�̿�
git push -u origin master              //�ѱ��ؿ�������������͵�Զ�̿���
git push origin master        �Ժ�ÿ�α����ύ�����͵�GitHub

git clone git@github.com:kqq411691175/gitskills.git//Զ�̿ⴴ���ú��¡�����ؿ�