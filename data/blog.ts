export type CalloutType = 'info' | 'warning' | 'success' | 'danger';
export type StackBadgeType = 'old' | 'new' | 'neutral';

export type BlogBlock =
  | { type: 'paragraph'; content: string }
  | {
      type: 'callout';
      calloutType: CalloutType;
      label: string;
      content: string;
    }
  | {
      type: 'code';
      filename: string;
      code: string;
    }
  | {
      type: 'timeline';
      items: {
        title: string;
        description: string;
      }[];
    }
  | {
      type: 'challenge-grid';
      challenges: {
        icon:
          | 'wrench'
          | 'tag'
          | 'key'
          | 'globe'
          | 'image'
          | 'package';
        title: string;
        description: string;
      }[];
    }
  | {
      type: 'result-grid';
      results: {
        number: string;
        label: string;
      }[];
    };

export type BlogSection = {
  num: string;
  heading: string;
  blocks: BlogBlock[];
};

export type BlogPost = {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  readTime: string;
  date: string;
  heroTag: string;
  audience: string;
  metaTopic: string;
  stackBadges: {
    label: string;
    type: StackBadgeType;
  }[];
  sections: BlogSection[];
  footerCta: string;
};

// This file is intentionally structured for manual editing.
// Add new posts by copying the object shape below and updating:
// hero metadata -> stack badges -> sections -> blocks.
export const posts: BlogPost[] = [
  {
    slug: 'vps-migration-17-subdomains',
    title: 'كيف نقلت موقع ضخم بـ 17 ساب دومين لسيرفر جديد بدون ما أغيّر سطر كود واحد',
    subtitle:
      'رحلة نقل منظومة مواقع متكاملة من VPS قديم لسيرفر جديد — بكل التفاصيل والتحديات الحقيقية',
    category: 'DevOps',
    readTime: '8 دقايق',
    date: 'مارس 2025',
    heroTag: 'DEVOPS · SERVER MIGRATION · REAL STORY',
    metaTopic: 'DevOps · Server Migration',
    audience: 'موجه لـ Developers & Tech Founders',
    stackBadges: [
      { label: 'PHP 7.4 Legacy', type: 'old' },
      { label: 'Yii2 Framework', type: 'old' },
      { label: 'MySQL', type: 'old' },
      { label: 'Apache', type: 'old' },
      { label: 'Webpack 2 + Vue 2', type: 'old' },
      { label: 'Webpack 5 + Sass', type: 'old' },
      { label: 'Ubuntu 22.04 LTS', type: 'new' },
      { label: '17 Subdomains ✓', type: 'new' },
      { label: 'SSL Active ✓', type: 'new' },
    ],
    sections: [
      {
        num: '// 01',
        heading: 'البداية — ليه قررنا ننقل أصلاً؟',
        blocks: [
          {
            type: 'paragraph',
            content:
              'المشروع كان شغّال من سنين على VPS بالسحابة. الموقع كان فيه أكتر من <strong>17 ساب دومين</strong>، داشبورد إدارة مشتركة لبراندين مختلفين، وقاعدة بيانات كبيرة فيها كل بيانات العملاء والمنتجات.',
          },
          {
            type: 'paragraph',
            content:
              'القرار مجاش من فراغ. الموضوع كان مزيج من: <strong>تكلفة الاستضافة</strong> بدأت ترتفع، والرغبة في <strong>تحكم أكبر في البنية التحتية</strong>، وإننا نلاقي بيئة أكثر استقرار وأوفر.',
          },
          {
            type: 'callout',
            calloutType: 'warning',
            label: '⚠ التحدي الأكبر من الأول',
            content:
              'الـ stack المستخدم قديم — PHP 7.4 مع Yii2 Framework، وعندنا نوعين من الـ Frontend Tooling: Webpack 2 مع Vue 2 لجزء، وWebpack 5 مع Sass للجزء التاني. القرار كان واضح من الأول: ننقل من غير ما نعدل كود.',
          },
        ],
      },
      {
        num: '// 02',
        heading: 'تجهيز السيرفر الجديد من الصفر',
        blocks: [
          {
            type: 'paragraph',
            content:
              'أول حاجة عملناها بعد ما اشترينا السيرفر الجديد — إننا نتأكد من إصدار الـ OS. وهنا واجهنا أول مفاجأة.',
          },
          {
            type: 'callout',
            calloutType: 'danger',
            label: '🚨 مشكلة ظهرت من أول دقيقة',
            content:
              'السيرفر اتفتح بـ Ubuntu 24.04 — وده كان مشكلة. النسخة دي مش بتدعم MySQL 5.7 بشكل طبيعي، والـ PHP 7.4 بيحتاج workarounds كتير عليها. الحل؟ إعادة تنصيب الـ OS فوراً على Ubuntu 22.04 LTS قبل ما نعمل أي حاجة.',
          },
          {
            type: 'paragraph',
            content: 'بعد كده، بدأنا التجهيز الحقيقي بالترتيب:',
          },
          {
            type: 'timeline',
            items: [
              {
                title: 'تحديث النظام وتنصيب الأدوات الأساسية',
                description:
                  'apt update, apt upgrade، وتنصيب كل الأدوات المهمة زي curl وgit وufw وfail2ban.',
              },
              {
                title: 'إنشاء يوزر منفصل عن الـ root',
                description:
                  'أفضل ممارسة أمنية — ما تشتغلش على الـ root طول الوقت. عملنا deploy user بصلاحيات sudo.',
              },
              {
                title: 'إعداد الـ Firewall (UFW)',
                description:
                  'فتحنا بس 3 بورتات: 22 للـ SSH، 80 للـ HTTP، 443 للـ HTTPS. كل حاجة تانية مقفولة.',
              },
              {
                title: 'تفعيل fail2ban',
                description:
                  'حماية تلقائية من Brute Force — لو حد غلط في الباسورد 5 مرات، اتبان تلقائياً لمدة ساعة.',
              },
            ],
          },
          {
            type: 'code',
            filename: 'firewall verification',
            code: `ufw status verbose

Status: active
To          Action    From
──          ──────    ────
22/tcp      ALLOW IN  Anywhere
80/tcp      ALLOW IN  Anywhere
443/tcp     ALLOW IN  Anywhere`,
          },
        ],
      },
      {
        num: '// 03',
        heading: 'تنصيب البيئة الكاملة',
        blocks: [
          {
            type: 'paragraph',
            content:
              'الموقع بيحتاج بيئة محددة — والهدف إننا نطابق البيئة القديمة بالظبط من غير ما نرقي حاجة:',
          },
          {
            type: 'callout',
            calloutType: 'info',
            label: 'ℹ البيئة المطلوبة',
            content:
              'Apache 2.4 · PHP 7.4 مع كل الـ Extensions · MySQL 8.0 بوضع التوافق مع 5.7 · Composer · Node.js نسختين مختلفتين (12 و16) عبر nvm',
          },
          {
            type: 'paragraph',
            content:
              '<strong>سبب نسختين من Node؟</strong> — جزء من الـ Frontend (الأقدم) بيحتاج Webpack 2 مع Node 12، والجزء التاني بيحتاج Webpack 5 مع Node 16. الاتنين لازم يشتغلوا على نفس السيرفر.',
          },
          {
            type: 'callout',
            calloutType: 'warning',
            label: '⚠ MySQL 5.7 — الحقيقة المرّة',
            content:
              'MySQL 5.7 مش متاح على Ubuntu 22.04 خالص. الحل الاحترافي: تنصيب MySQL 8.0 وضبطه يتصرف زي 5.7 عن طريق إضافة إعدادات توافق في ملف الـ config — وده نجح 100% مع الكود القديم من غير أي تعديلات.',
          },
          {
            type: 'code',
            filename: 'php extensions verification',
            code: `php -m | grep -E 'pdo_mysql|intl|gd|mbstring|curl|zip|opcache'

gd
intl
mbstring
opcache
pdo_mysql
curl
zip

# ✓ كل الـ Extensions الضرورية موجودة`,
          },
        ],
      },
      {
        num: '// 04',
        heading: 'نقل الملفات وقاعدة البيانات',
        blocks: [
          {
            type: 'paragraph',
            content:
              'الباك اب كان جاهز — ملف tar.gz واحد فيه كل ملفات الموقع، وملفات SQL منفصلة لكل قاعدة بيانات. النقل حصل <strong>مباشرة من السيرفر القديم للجديد</strong> — أسرع بكتير من إنك تنزله لوكال وترفعه تاني.',
          },
          {
            type: 'code',
            filename: 'server-to-server transfer (fastest method)',
            code: `# من السيرفر القديم — نقل مباشر للسيرفر الجديد
scp ~/full-backup.tar.gz root@NEW_SERVER_IP:/var/www/project/

# نقل ملفات الـ DB
scp ~/database1.sql ~/database2.sql root@NEW_SERVER_IP:/var/www/project/backups/db/

# على السيرفر الجديد — فك الضغط
cd /var/www/project && tar -xzvf full-backup.tar.gz`,
          },
          {
            type: 'paragraph',
            content:
              'هيكل المجلدات اتنظم بشكل احترافي — كل مشروع في مجلد منفصل تحت <code>/var/www/project/</code>، مع مجلدات منفصلة للـ logs والـ backups.',
          },
          {
            type: 'paragraph',
            content:
              'بالنسبة لقواعد البيانات — عندنا <strong>4 databases</strong> لمشاريع مختلفة. كل واحدة اتعمل لها:',
          },
          {
            type: 'code',
            filename: 'create isolated db user per project',
            code: `-- مش بنستخدم root للتطبيق — كل مشروع ليه يوزر منفصل
CREATE DATABASE project_db CHARACTER SET utf8mb4;
CREATE USER 'project_user'@'localhost' IDENTIFIED WITH
  mysql_native_password BY 'StrongPassword!';
GRANT ALL PRIVILEGES ON project_db.* TO 'project_user'@'localhost';

-- ثم الاستيراد
mysql -u root -p project_db < /backups/db/project.sql`,
          },
          {
            type: 'callout',
            calloutType: 'info',
            label: '💡 نصيحة مهمة',
            content:
              'لو الباسورد فيه رمز # — لازم تحطه بين quotation marks في ملف الـ .env. مثال: DB_PASSWORD="MyPass#2024" — من غير الـ quotes، كل حاجة بعد الـ # بتتجاهل وبيجي خطأ في الـ connection.',
          },
        ],
      },
      {
        num: '// 05',
        heading: 'ربط الـ Domains وإعداد الـ Apache Virtual Hosts',
        blocks: [
          {
            type: 'paragraph',
            content:
              '17 ساب دومين — كل واحد محتاج ملف <code>.conf</code> منفصل في Apache يوجّهه للمجلد الصح. الموضوع منظم ومش معقد، بس محتاج دقة.',
          },
          {
            type: 'code',
            filename: 'apache vhost — pattern for each subdomain',
            code: `<VirtualHost *:80>
    ServerName subdomain.domain.com
    DocumentRoot /var/www/project/app/web
    <Directory /var/www/project/app/web>
        AllowOverride All
        Require all granted
    </Directory>
    ErrorLog /var/www/project/logs/apache/sub-error.log
</VirtualHost>`,
          },
          {
            type: 'paragraph',
            content:
              'قبل ما نلمس الـ DNS — عملنا تست لوكال من خلال ملف الـ hosts على الجهاز:',
          },
          {
            type: 'code',
            filename: 'Windows: C:\\Windows\\System32\\drivers\\etc\\hosts',
            code: `# نضيف مؤقتاً لاختبار السيرفر الجديد بدون تغيير DNS
NEW_SERVER_IP  domain.com
NEW_SERVER_IP  admin.domain.com
NEW_SERVER_IP  api.domain.com

# بعد التأكد من كل حاجة — نشيل السطور دي ونغير الـ DNS`,
          },
          {
            type: 'callout',
            calloutType: 'success',
            label: '✅ الاختبار الذهبي قبل التحويل',
            content:
              'التست عبر ملف الـ hosts خلّانا نشوف كل الـ 17 ساب دومين شغالين بشكل كامل على السيرفر الجديد — قبل ما أي مستخدم يحس بأي حاجة.',
          },
        ],
      },
      {
        num: '// 06',
        heading: 'الـ SSL Certificates — الموقع يبقى Secure',
        blocks: [
          {
            type: 'paragraph',
            content:
              'بعد تحويل الـ DNS وتأكدنا إن كل حاجة وصلت للسيرفر الجديد — جه دور الـ SSL. استخدمنا Let’s Encrypt عبر Certbot، وطلبنا certificate واحد يغطي كل الـ subdomains مرة واحدة.',
          },
          {
            type: 'code',
            filename: 'certbot — single command for all subdomains',
            code: `certbot --apache \\
  -d domain.com -d www.domain.com \\
  -d admin.domain.com \\
  -d api.domain.com \\
  -d storage.domain.com \\
  --email admin@domain.com \\
  --agree-tos --no-eff-email

Successfully received certificate.
Congratulations! You have successfully enabled HTTPS.`,
          },
          {
            type: 'callout',
            calloutType: 'warning',
            label: '⚠ تفصيلة مهمة في الـ DNS',
            content:
              'لو عندك www كـ CNAME record بيشاور على الـ root domain — Certbot مش هيقدر يعمل SSL ليه. الحل: احذف الـ CNAME واعمل A record مباشرة بالـ IP الجديد.',
          },
        ],
      },
      {
        num: '// 07',
        heading: 'التحديات — الجزء اللي مش بيتقال عادةً',
        blocks: [
          {
            type: 'paragraph',
            content:
              'المشاريع الكبيرة فيها مفاجآت — وده طبيعي. الفرق بين المحترف والمبتدئ إن المحترف <strong>يعرف يتوقع المشاكل ويحلها بسرعة</strong>. إيه اللي صادفناه:',
          },
          {
            type: 'challenge-grid',
            challenges: [
              {
                icon: 'wrench',
                title: 'MySQL 5.7 مش متاح على Ubuntu 22.04',
                description:
                  'الحل كان MySQL 8.0 مع ضبط إعدادات التوافق — نجح بدون أي تعديل في الكود.',
              },
              {
                icon: 'tag',
                title: 'short_open_tag معطّل افتراضياً',
                description:
                  'الـ Views القديمة بتستخدم <? بدل <?php. تفعيل الـ short_open_tag في php.ini حلّ المشكلة مرة واحدة لكل الملفات.',
              },
              {
                icon: 'key',
                title: 'الـ # في الباسورد بيكسر الـ Dotenv',
                description:
                  'الـ # في ملف الـ .env بيُعامَل كـ comment. الحل: أي باسورد فيه # لازم يتحط بين quotes.',
              },
              {
                icon: 'globe',
                title: 'DNS Propagation وقت الانتظار',
                description:
                  'تغيير الـ DNS محتاج وقت — من 5 دقايق لـ 48 ساعة حسب الـ TTL. الحل: نخفض الـ TTL لـ 5 دقايق قبل النقل بـ 24 ساعة.',
              },
              {
                icon: 'image',
                title: 'الصور مش بتظهر بعد الـ SSL',
                description:
                  'ملفات الـ .env كانت بتشاور على storage بـ https لكن الـ SSL ما تفعّلش لسه. الترتيب مهم: SSL الأول، ثم التحقق من الصور.',
              },
              {
                icon: 'package',
                title: 'نسختين من Node على نفس السيرفر',
                description:
                  'Webpack 2 بيحتاج Node 12، وWebpack 5 بيحتاج Node 16. الحل: nvm لإدارة الإصدارات وسهل التبديل بينها.',
              },
            ],
          },
        ],
      },
      {
        num: '// 08',
        heading: 'النتيجة النهائية',
        blocks: [
          {
            type: 'paragraph',
            content:
              'في النهاية — الموقع شغّال بالكامل على السيرفر الجديد. كل الخدمات مربوطة. كل الساب دومينات آمنة بـ HTTPS. والأهم: <strong>ما اتغيّر سطر كود واحد</strong>.',
          },
          {
            type: 'result-grid',
            results: [
              { number: '17', label: 'Subdomain شغّالين' },
              { number: '4', label: 'Databases منقولة' },
              { number: '0', label: 'تعديل في الكود' },
              { number: '✓', label: 'SSL على كل الدومينات' },
            ],
          },
          {
            type: 'callout',
            calloutType: 'success',
            label: '✅ الدرس الأهم',
            content:
              'نقل موقع ضخم مش بيعتمد على القوة — بيعتمد على الترتيب والتخطيط والاختبار قبل التحويل. لو اتبعت الخطوات بالترتيب الصح واختبرت كل حاجة لوكال قبل ما تلمس الـ DNS — هتعدي المشروع من غير ما أي مستخدم يحس بأي حاجة.',
          },
        ],
      },
    ],
    footerCta:
      '💬 عندك موقع محتاج ينقل أو سيرفر محتاج يتجهز؟ الخطوات دي قابلة للتطبيق على أي stack — المبدأ واحد، التفاصيل بس بتتغير.',
  },
];
