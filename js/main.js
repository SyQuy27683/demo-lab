/* ============================================================
   LAB héritage — main.js  (v2)
   Cập nhật: Brand modals (ALMA/KEIM), Insight modals,
             Standards section, Partner highlight,
             Slide-up modal animation, bilingual
   ============================================================ */
'use strict';

// ═══════════════════════════════════════
// LANGUAGE DATA
// ═══════════════════════════════════════
const LANG = {
  vi: {
    nav_about:'Về Chúng Tôi', nav_services:'Dịch Vụ', nav_portfolio:'Dự Án',
    nav_insights:'Kiến Thức', nav_contact:'Liên Hệ', nav_standards:'Chuẩn Mực',
    nav_partners:'Đối Tác',
    hero_eyebrow:'LAB héritage — Conserver la beauté',
    hero_title:'Phục dựng <em>Ký ức Di sản</em><br>– Kiến trúc',
    /* 3 phần riêng cho hero-title */
    hero_t1:'Phục dựng',
    hero_t2:'Ký ức',
    hero_t3:'Di sản – Kiến trúc',
    hero_subtitle:'Hơn 5 năm tiên phong kết hợp nghệ thuật thủ công tinh xảo và công nghệ hiện đại trong phục dựng – phục chế di sản, công trình cao cấp.',
    hero_cta:'Đặt lịch khảo sát & Tư vấn', hero_cta2:'Xem Dự Án', hero_scroll:'Cuộn xuống',
    ba_label:'Trải Nghiệm Trước & Sau', ba_title:'Sự khác biệt <em>ngoạn mục</em>',
    ba_desc:'Kéo thanh trượt để cảm nhận sự chuyển đổi kỳ diệu mà LAB héritage mang lại cho từng công trình.',
    ba_before:'Trước', ba_after:'Sau', ba_note:'← Kéo để so sánh →',
    stat1_num:'10.000+', stat1_label:'Vật phẩm đã xử lý',
    stat2_num:'5+', stat2_label:'Năm kinh nghiệm',
    stat3_num:'50+', stat3_label:'Nhân sự chuyên nghiệp',
    stat4_num:'5.000+', stat4_label:'Khách hàng tin tưởng',
    about_label:'Về Chúng Tôi',
    about_title:'Tiên phong <em>bảo tồn</em><br>giá trị nguyên bản',
    about_p1:'LAB héritage là đơn vị tiên phong tại Việt Nam trong giải pháp phục dựng – phục chế về nguyên bản. Chúng tôi nhận thấy các văn hóa lịch sử, di tích và vật phẩm cổ có giá trị thời gian chưa được xử lý đúng cách.',
    about_p2:'Với đội ngũ hơn 50 nhân sự được đào tạo bài bản theo quy trình Châu Âu, văn phòng tại TP.HCM và xưởng sản xuất tại Củ Chi hơn 2.000m² hiện đại, chúng tôi cam kết cung cấp dịch vụ đạt chuẩn quốc tế.',
    about_p3:'Sản phẩm sử dụng 100% từ Châu Âu qua Tập đoàn ALMA F.R.C. (EPV) và KEIM — sơn khoáng số 1 thế giới từ Đức gần 150 năm.',
    about_partner_highlight:'LAB héritage tự hào là <em>đối tác chiến lược và đơn vị độc quyền tại Việt Nam</em> của tập đoàn ALMA F.R.C 🇫🇷 và tập đoàn KEIM 🇩🇪',
    about_brand_more:'Tìm hiểu về',
    about_f1_title:'Quy trình Châu Âu', about_f1_sub:'Đào tạo bởi chuyên gia EU',
    about_f2_title:'Sản phẩm 100% EU', about_f2_sub:'ALMA F.R.C. & KEIM',
    about_f3_title:'Tiêu chuẩn quốc tế', about_f3_sub:'ISO, ICOMOS, EN...',
    about_f4_title:'Bảo hành dài hạn', about_f4_sub:'Cam kết chất lượng',
    about_badge_years:'Năm\nKinh nghiệm',
    partners_label:'Đối Tác & Nhà Cung Cấp Được Uỷ Quyền',
    svc_label:'Dịch Vụ Chuyên Biệt',
    svc_title:'Giải pháp <em>toàn diện</em><br>cho mọi công trình',
    svc_subtitle:'Từ di sản văn hóa đến villa nghỉ dưỡng, chúng tôi mang đến giải pháp phục dựng – phục chế chuyên sâu.',
    svc1_title:'Bảo Tồn Di Sản',
    svc1_desc:'Quy trình và giải pháp chuyên biệt cho các công trình mang yếu tố lịch sử, văn hóa. Giữ nguyên "màu thời gian – Patina" theo nguyên tắc bảo tồn quốc tế.',
    svc1_tag3:'Patina',
    svc2_title:'Phục Hồi Villa & Resort',
    svc2_desc:'Giải pháp toàn diện cho biệt thự, khu nghỉ dưỡng cao cấp — cải tạo nội thất, làm mới kiến trúc ngoại thất.',
    svc2_tag1:'Nội Thất', svc2_tag2:'Ngoại Thất',
    svc3_title:'Xử Lý Vật Liệu Cao Cấp',
    svc3_desc:'Chuyên môn sâu về đá, gỗ, kim loại, kính, vải, da, nhựa composite theo chuẩn kỹ thuật Châu Âu.',
    svc3_tag1:'Đá & Gỗ', svc3_tag2:'Kim Loại',
    svc_more:'Tìm hiểu thêm',
    std_label:'Chuẩn Mực Quốc Tế',
    std_title:'Cam kết <em>chuẩn mực</em><br>quốc tế',
    std_subtitle:'Mọi quy trình của LAB héritage được thực hiện theo các tiêu chuẩn quốc tế nghiêm ngặt nhất trong lĩnh vực bảo tồn và phục chế di sản.',
    pf_label:'Danh Mục Dự Án', pf_title:'Công trình <em>tiêu biểu</em>',
    pf_all:'Tất cả', pf_heritage:'Di Sản', pf_resort:'Resort', pf_villa:'Villa', pf_civil:'Dân Dụng',
    proc_label:'Quy Trình', proc_title:'Năm bước <em>chuẩn mực</em><br>Châu Âu',
    proc_s1_title:'Khảo Sát & Đánh Giá', proc_s1_desc:'Lấy mẫu, phân tích vật liệu theo tiêu chuẩn EN 16096, ICOMOS.',
    proc_s2_title:'Vệ Sinh Chuyên Sâu', proc_s2_desc:'Loại bỏ chất bẩn, rêu mốc bằng phương pháp phù hợp — không gây tổn hại cấu trúc gốc.',
    proc_s3_title:'Phục Dựng & Phục Chế', proc_s3_desc:'Can thiệp kỹ thuật chuyên sâu, phục hồi cấu trúc hư hại, tái tạo chi tiết về nguyên bản.',
    proc_s4_title:'Bảo Dưỡng & Bảo Vệ', proc_s4_desc:'Áp dụng lớp bảo vệ bền vững từ KEIM và ALMA F.R.C., chống ẩm và oxy hóa.',
    proc_s5_title:'Bàn Giao & Bảo Hành', proc_s5_desc:'Nghiệm thu chi tiết, hướng dẫn chăm sóc sau phục hồi, cam kết bảo hành dài hạn.',
    ins_label:'Kiến Thức & Tư Liệu', ins_title:'Góc nhìn <em>chuyên gia</em>',
    ins1_cat:'Hướng Dẫn', ins1_title:'Hướng Dẫn Chăm Sóc Công Trình Sau Khi Phục Hồi', ins1_date:'15 Tháng 3, 2025',
    ins2_cat:'Kỹ Thuật', ins2_title:'Xử Lý Bề Mặt Đá Cao Cấp: Từ Patina Đến Bảo Tồn Hiện Đại', ins2_date:'28 Tháng 2, 2025',
    ins3_cat:'Case Study', ins3_title:'Château de la Mercerie — Hành Trình Phục Chế "Versailles Nhỏ"', ins3_date:'10 Tháng 1, 2025',
    ins_read:'Đọc tiếp',
    ct_label:'Liên Hệ', ct_title:'Bắt đầu <em>dự án</em><br>của bạn',
    ct_tagline:'"Việc tưởng như không thể là công việc hàng ngày của chúng tôi"',
    ct_addr_label:'Địa Chỉ', ct_addr:'37/20 Nguyễn Minh Hoàng, P. Bảy Hiền, TP. Hồ Chí Minh',
    ct_phone_label:'Hotline', ct_email_label:'Email',
    ct_form_name:'Họ và tên', ct_form_email:'Địa chỉ email', ct_form_phone:'Số điện thoại',
    ct_form_service:'Dịch vụ quan tâm',
    ct_svc_opt0:'— Chọn dịch vụ —', ct_svc_opt1:'Bảo tồn di sản',
    ct_svc_opt2:'Phục hồi Villa & Resort', ct_svc_opt3:'Xử lý vật liệu cao cấp', ct_svc_opt4:'Khác',
    ct_form_msg:'Nội dung', ct_form_placeholder:'Mô tả công trình và yêu cầu của bạn...',
    ct_submit:'Gửi Yêu Cầu Tư Vấn',
    ft_slogan:'Conserver la beauté',
    ft_desc:'Đơn vị tiên phong phục dựng – phục chế di sản, công trình kiến trúc và vật phẩm cao cấp theo chuẩn Châu Âu tại Việt Nam.',
    ft_nav:'Điều Hướng', ft_svc:'Dịch Vụ', ft_contact:'Liên Hệ',
    ft_copy:'© 2025 LAB héritage. Bảo lưu mọi quyền.',
    // Partners & Clients
    pc_label:'Đối Tác & Khách Hàng',
    pc_title:'Tin tưởng của <em>những thương hiệu</em> hàng đầu',
    pc_subtitle:'Cùng với 5.000+ khách hàng cá nhân của chúng tôi.',
    pc_sector1:'Di Sản Văn Hoá',
    pc_sector2:'Công Trình Kiến Trúc',
    pc_sector3:'Du Thuyền & Ô Tô',
    pc_sector4:'Thời Trang Cao Cấp',
    // UI labels
    modal_close:'Đóng',
    tooltip_zalo:'Chat Zalo',
    tooltip_phone:'Gọi ngay',
    // Brand buttons
    brand_alma_label:'Tìm hiểu về ALMA F.R.C.',
    brand_keim_label:'Tìm hiểu về KEIM',
    // Case studies
    cs_label:'Câu Chuyện Minh Chứng',
    cs_title:'Công trình <em>tiêu biểu</em> thế giới',
    cs_tag_heritage:'Di Sản Thế Giới',
    cs_tag_icon:'Biểu Tượng Quốc Gia',
    cs_keim_durability:'100+ năm bền vững',
    cs1_text:'Lâu đài Château de la Mercerie – một trong những công trình kiến trúc cổ điển Pháp – đã được hồi sinh nhờ giải pháp bảo tồn toàn diện từ tập đoàn ALMA F.R.C. Dự án kéo dài 5 năm, áp dụng kỹ thuật vữa cổ, đá tái tạo và lớp phủ bảo vệ đạt chuẩn EPV. LAB héritage là đơn vị chuyển giao công nghệ và cung cấp vật liệu độc quyền tại Việt Nam, giúp giữ nguyên giá trị lịch sử mà vẫn đảm bảo độ bền vững cho thế hệ sau.',
    cs2_text:'Nhà Trắng, biểu tượng quyền lực và lịch sử nước Mỹ, đã lựa chọn sơn khoáng KEIM để bảo vệ các bề mặt ngoại thất. Sản phẩm với công nghệ silic hóa độc quyền giúp tường "thở", chống rêu mốc, chịu được thời tiết khắc nghiệt mà không bong tróc. Hơn 100 năm qua, KEIM vẫn giữ màu sắc nguyên bản. LAB héritage tự hào là đối tác độc quyền mang giải pháp này đến các công trình di sản Việt Nam.',
    pf_featured:'Nổi bật',
    // Nút tư vấn
    consult_btn:'Tư vấn ngay',
    consult_modal_title:'Bắt đầu <em>dự án</em> của bạn',
    consult_modal_sub:'"Việc tưởng như không thể là công việc hàng ngày của chúng tôi"',
    consult_label_name:'Họ và tên', consult_label_phone:'Số điện thoại',
    consult_label_service:'Dịch vụ quan tâm', consult_label_msg:'Nội dung yêu cầu',
    consult_ph_name:'Họ và tên của bạn', consult_ph_phone:'Số điện thoại',
    consult_ph_msg:'Mô tả ngắn công trình / yêu cầu...',
    consult_svc0:'— Chọn dịch vụ —', consult_svc1:'Bảo tồn di sản',
    consult_svc2:'Phục hồi Villa & Resort', consult_svc3:'Xử lý vật liệu cao cấp', consult_svc4:'Khác',
    consult_submit:'Gửi yêu cầu tư vấn',
  },
  en: {
    nav_about:'About Us', nav_services:'Services', nav_portfolio:'Portfolio',
    nav_insights:'Insights', nav_contact:'Contact', nav_standards:'Standards',
    nav_partners:'Partners',
    hero_eyebrow:'LAB héritage — Conserver la beauté',
    hero_title:'Reviving <em>Memory</em><br>Heritage – Architecture',
    /* 3 parts for hero-title */
    hero_t1:'Reviving',
    hero_t2:'Memory',
    hero_t3:'Heritage - Architecture',
    hero_subtitle:'Over 5 years pioneering the fusion of fine craftsmanship and modern technology in heritage and luxury building restoration.',
    hero_cta:'Schedule a Survey & Consultation', hero_cta2:'View Projects', hero_scroll:'Scroll down',
    ba_label:'Before & After Experience', ba_title:'A <em>spectacular</em> transformation',
    ba_desc:'Drag the slider to witness the remarkable transformation that LAB héritage brings to each project.',
    ba_before:'Before', ba_after:'After', ba_note:'← Drag to compare →',
    stat1_num:'10,000+', stat1_label:'Items Restored',
    stat2_num:'5+', stat2_label:'Years of Experience',
    stat3_num:'50+', stat3_label:'Professional Staff',
    stat4_num:'5,000+', stat4_label:'Satisfied Clients',
    about_label:'About Us',
    about_title:'Pioneering <em>authentic</em><br>conservation',
    about_p1:'LAB héritage is Vietnam\'s pioneer in authentic restoration and conservation solutions. We recognized that historic cultural artifacts and monuments were not being treated correctly.',
    about_p2:'With 50+ professionals trained in European processes, an office in Ho Chi Minh City, and a 2,000m² modern workshop in Cu Chi, we deliver internationally standardized services.',
    about_p3:'All products sourced 100% from Europe through ALMA F.R.C. Group (EPV certified) and KEIM — world\'s No. 1 mineral paint from Germany, guaranteeing 100+ year durability.',
    about_partner_highlight:"LAB héritage proudly serves as the <em>strategic partner and exclusive representative in Vietnam</em> of ALMA F.R.C 🇫🇷 and KEIM Group 🇩🇪",
    about_brand_more:'Learn about',
    about_f1_title:'European Process', about_f1_sub:'Trained by EU experts',
    about_f2_title:'100% EU Products', about_f2_sub:'ALMA F.R.C. & KEIM',
    about_f3_title:'Int\'l Standards', about_f3_sub:'ISO, ICOMOS, EN...',
    about_f4_title:'Long-term Warranty', about_f4_sub:'Quality guaranteed',
    about_badge_years:'Years\nExperience',
    partners_label:'Partners & Authorized Brands',
    svc_label:'Specialized Services',
    svc_title:'<em>Comprehensive</em><br>solutions for every project',
    svc_subtitle:'From cultural heritage to luxury resorts, we deliver deep restoration expertise with absolute respect for original value.',
    svc1_title:'Heritage Conservation',
    svc1_desc:'Specialized processes for structures with historical and cultural significance. Preserving the "time color – Patina" per international conservation principles.',
    svc1_tag3:'Patina',
    svc2_title:'Villa & Resort Restoration',
    svc2_desc:'Comprehensive solutions for luxury villas and resorts — interior renovation, exterior architectural renewal.',
    svc2_tag1:'Interior', svc2_tag2:'Exterior',
    svc3_title:'Premium Material Treatment',
    svc3_desc:'Deep expertise in stone, wood, metal, glass, fabric, leather, and composites to European technical standards.',
    svc3_tag1:'Stone & Wood', svc3_tag2:'Metal',
    svc_more:'Learn more',
    std_label:'International Standards',
    std_title:'Committed to <em>international</em><br>excellence',
    std_subtitle:'Every LAB héritage process is executed according to the world\'s most rigorous standards in heritage conservation and restoration.',
    pf_label:'Project Portfolio', pf_title:'Featured <em>projects</em>',
    pf_all:'All', pf_heritage:'Heritage', pf_resort:'Resort', pf_villa:'Villa', pf_civil:'Civil',
    proc_label:'Our Process', proc_title:'Five steps of <em>European</em><br>standards',
    proc_s1_title:'Survey & Assessment', proc_s1_desc:'Material sampling and analysis per EN 16096 and ICOMOS standards.',
    proc_s2_title:'Deep Cleaning', proc_s2_desc:'Removing dirt and mold using appropriate methods — without damaging the original structure.',
    proc_s3_title:'Restoration & Conservation', proc_s3_desc:'Deep technical intervention, repairing damaged structures according to historical documentation.',
    proc_s4_title:'Maintenance & Protection', proc_s4_desc:'Applying durable protection from KEIM and ALMA F.R.C., protecting against moisture and oxidation.',
    proc_s5_title:'Handover & Warranty', proc_s5_desc:'Detailed inspection, post-restoration care guidance, and long-term warranty commitments.',
    ins_label:'Knowledge & Resources', ins_title:'Expert <em>insights</em>',
    ins1_cat:'Guide', ins1_title:'Post-Restoration Care Guide for Your Property', ins1_date:'March 15, 2025',
    ins2_cat:'Technical', ins2_title:'Premium Stone Surface Treatment: From Patina to Modern Conservation', ins2_date:'February 28, 2025',
    ins3_cat:'Case Study', ins3_title:'Château de la Mercerie — Restoring the "Little Versailles"', ins3_date:'January 10, 2025',
    ins_read:'Read more',
    ct_label:'Contact', ct_title:'Start your <em>project</em><br>today',
    ct_tagline:'"What seems impossible is our everyday work"',
    ct_addr_label:'Address', ct_addr:'37/20 Nguyen Minh Hoang St, Bay Hien Ward, Ho Chi Minh City',
    ct_phone_label:'Hotline', ct_email_label:'Email',
    ct_form_name:'Full Name', ct_form_email:'Email Address', ct_form_phone:'Phone Number',
    ct_form_service:'Service of Interest',
    ct_svc_opt0:'— Select a service —', ct_svc_opt1:'Heritage Conservation',
    ct_svc_opt2:'Villa & Resort Restoration', ct_svc_opt3:'Premium Material Treatment', ct_svc_opt4:'Other',
    ct_form_msg:'Message', ct_form_placeholder:'Describe your project and requirements...',
    ct_submit:'Send Consultation Request',
    ft_slogan:'Conserver la beauté',
    ft_desc:'Vietnam\'s pioneer in authentic restoration of heritage sites, architectural structures, and luxury assets to European standards.',
    ft_nav:'Navigation', ft_svc:'Services', ft_contact:'Contact',
    ft_copy:'© 2025 LAB héritage. All rights reserved.',
    // Partners & Clients
    pc_label:'Partners & Clients',
    pc_title:'Trusted by <em>world-leading</em> brands',
    pc_subtitle:'Along with 5,000+ individual clients.',
    pc_sector1:'Cultural Heritage',
    pc_sector2:'Architecture',
    pc_sector3:'Yachts & Automobiles',
    pc_sector4:'Luxury Fashion',
    // UI labels
    modal_close:'Close',
    tooltip_zalo:'Chat Zalo',
    tooltip_phone:'Call now',
    // Brand buttons
    brand_alma_label:'Learn about ALMA F.R.C.',
    brand_keim_label:'Learn about KEIM',
    // Case studies
    cs_label:'Case Studies',
    cs_title:'World <em>landmark</em> projects',
    cs_tag_heritage:'World Heritage',
    cs_tag_icon:'National Icon',
    cs_keim_durability:'100+ years of sustainability',
    cs1_text:'Château de la Mercerie – a classic French architectural masterpiece – was revived through comprehensive conservation solutions from ALMA F.R.C. The 5-year project applied historic mortar, reconstituted stone, and EPV-standard protective coatings. LAB héritage transfers technology and supplies exclusive materials in Vietnam, preserving historical value while ensuring sustainability for future generations.',
    cs2_text:'The White House, an icon of American power and history, chose KEIM mineral paint to protect its exterior surfaces. With exclusive silicification technology, the paint allows walls to breathe, resists algae, withstands harsh weather without peeling. For over 100 years, KEIM has maintained its original color. LAB héritage proudly serves as the exclusive partner bringing this solution to Vietnamese heritage sites.',
    pf_featured:'Featured',
    // Consult button
    consult_btn:'Get advice',
    consult_modal_title:'Start your <em>project</em> today',
    consult_modal_sub:'"What seems impossible is our everyday work"',
    consult_label_name:'Full name', consult_label_phone:'Phone number',
    consult_label_service:'Service of interest', consult_label_msg:'Your message',
    consult_ph_name:'Your full name', consult_ph_phone:'Phone number',
    consult_ph_msg:'Brief description of your project / request...',
    consult_svc0:'— Select a service —', consult_svc1:'Heritage Conservation',
    consult_svc2:'Villa & Resort Restoration', consult_svc3:'Premium Material Treatment', consult_svc4:'Other',
    consult_submit:'Send consultation request',
  }
};

// ═══════════════════════════════════════
// STANDARDS DATA
// ═══════════════════════════════════════
const STANDARDS = [
  { icon:'🏛️', name:'ICOMOS',
    scope_vi:'Bảo tồn di sản văn hóa', scope_en:'Cultural Heritage Conservation',
    desc_vi:'Tuân thủ toàn bộ nguyên tắc và hướng dẫn của Hội đồng Quốc tế về Di tích và Di chỉ trong mọi dự án phục chế.',
    desc_en:'Full compliance with the International Council on Monuments and Sites principles in all restoration projects.' },
  { icon:'🌐', name:'UNESCO',
    scope_vi:'Di sản thế giới', scope_en:'World Heritage',
    desc_vi:'Áp dụng hướng dẫn phục hồi công trình lịch sử của UNESCO, đảm bảo tính toàn vẹn và xác thực của di sản.',
    desc_en:'Applying UNESCO guidelines for historic building restoration, ensuring heritage integrity and authenticity.' },
  { icon:'🔬', name:'EN 16096 – 16163',
    scope_vi:'Tiêu chuẩn Châu Âu', scope_en:'European Standard',
    desc_vi:'Chuẩn EN về khảo sát, đánh giá và can thiệp vật liệu di sản — từ lấy mẫu đến thi công phục chế.',
    desc_en:'EN standard for surveying, assessing, and intervening on heritage materials — from sampling to restoration.' },
  { icon:'🏅', name:'ISO 15686 / 9001',
    scope_vi:'Kiểm soát chất lượng', scope_en:'Quality Management',
    desc_vi:'Hệ thống quản lý chất lượng quốc tế và tiêu chuẩn độ bền công trình, đảm bảo dịch vụ nhất quán.',
    desc_en:'International quality management systems and building durability standards for consistent service delivery.' },
  { icon:'🧪', name:'KEIM EPV',
    scope_vi:'Công nghệ khoáng hóa', scope_en:'Mineral Technology',
    desc_vi:'Sơn khoáng KEIM (Đức, ~150 năm) đạt giải EPV – Entreprise du Patrimoine Vivant, cam kết bền vững 100+ năm.',
    desc_en:'KEIM mineral paint (Germany, ~150 years) holds the EPV award, guaranteeing 100+ year durability.' },
  { icon:'⚗️', name:'ALMA F.R.C. EPV',
    scope_vi:'Hóa chất phục chế', scope_en:'Restoration Chemistry',
    desc_vi:'Tập đoàn ALMA F.R.C. (Pháp, 100+ năm) sở hữu chứng nhận EPV và các tiêu chuẩn CE, REACH, LCP.',
    desc_en:'ALMA F.R.C. Group (France, 100+ years) holds EPV certification and CE, REACH, LCP compliance.' },
  { icon:'📋', name:'ICOM-CC',
    scope_vi:'Bảo tồn & Bảo quản', scope_en:'Conservation & Preservation',
    desc_vi:'Hướng dẫn kỹ thuật của Uỷ ban Bảo tồn ICOM cho các hệ vật liệu: kim loại, gỗ, đá, da, vải.',
    desc_en:'ICOM Conservation Committee technical guidelines for material categories: metals, wood, stone, leather, textiles.' },
  { icon:'📐', name:'ASTM G1 / ISO 8407',
    scope_vi:'Xử lý bề mặt kim loại', scope_en:'Metal Surface Treatment',
    desc_vi:'Tiêu chuẩn quốc tế về làm sạch, khử gỉ và bảo tồn bề mặt kim loại di sản — không phá hủy vật liệu gốc.',
    desc_en:'International standards for cleaning, de-rusting, and conserving heritage metal surfaces safely.' },
];

// ═══════════════════════════════════════
// BRAND DATA (ALMA + KEIM)
// ═══════════════════════════════════════
const BRANDS = {
  alma: {
    flag:'🇫🇷', name:'ALMA F.R.C.',
    tagline_vi:'Tập đoàn hóa chất phục chế hàng đầu Châu Âu',
    tagline_en:"Europe's Leading Restoration Chemistry Group",
    stats:[
      {num:'100+', lbl_vi:'Năm lịch sử',       lbl_en:'Years of history'},
      {num:'EPV',  lbl_vi:'Chứng nhận Di Sản',  lbl_en:'Heritage Certified'},
      {num:'30+',  lbl_vi:'Quốc gia',           lbl_en:'Countries'},
    ],
    sections_vi:[
      {title:'Lịch sử & Thành lập',
       text:'Tập đoàn ALMA F.R.C. được thành lập tại Pháp vào đầu thế kỷ 20, với hơn 100 năm hoạt động trong lĩnh vực nghiên cứu và sản xuất hóa chất phục chế chuyên dụng. Tập đoàn được trao tặng danh hiệu <strong>EPV – Entreprise du Patrimoine Vivant</strong> (Công ty Di Sản Sống), một trong những chứng nhận danh giá nhất của Cộng hòa Pháp.'},
      {title:'Sản phẩm & Tiêu chuẩn',
       text:'Toàn bộ sản phẩm của ALMA F.R.C. đáp ứng các tiêu chuẩn khắt khe nhất: <strong>1907/2006/CE, LCP 1272/2008/CE, ICPE 1430-1432-1433, REACH (SVHC)</strong>. Các sản phẩm được phân phối độc quyền tại Việt Nam bởi LAB héritage.',
       certs:['1907/2006/CE','LCP 1272/2008/CE','REACH (SVHC)','EPV France','ICPE 1430-1433']},
      {title:'Công trình tiêu biểu',
       text:'<strong>Château de la Mercerie</strong> — "Versailles Nhỏ" vùng Charente, đạt kỷ lục Guinness về chiều ngang, thuộc Di Sản Văn Hóa Thế giới. Sau gần 30 năm bỏ hoang, ALMA F.R.C. dành 3 năm phục chế toàn bộ công trình về nguyên bản.'},
      {title:'Hợp tác với LAB héritage', isCollab:true,
       text:'LAB héritage là đơn vị duy nhất được ALMA F.R.C. ủy quyền phân phối và triển khai hệ sản phẩm phục chế tại Việt Nam. Đội ngũ kỹ thuật được đào tạo trực tiếp bởi các chuyên gia từ tập đoàn ALMA F.R.C. tại Pháp.'},
    ],
    sections_en:[
      {title:'History & Foundation',
       text:'ALMA F.R.C. Group was founded in France in the early 20th century, with over 100 years of activity in research and production of specialized restoration chemicals. The group holds the prestigious <strong>EPV – Entreprise du Patrimoine Vivant</strong> (Living Heritage Company) title.'},
      {title:'Products & Standards',
       text:'All ALMA F.R.C. products meet the strictest standards: <strong>1907/2006/CE, LCP 1272/2008/CE, ICPE 1430-1432-1433, REACH (SVHC)</strong>. Products are exclusively distributed in Vietnam by LAB héritage.',
       certs:['1907/2006/CE','LCP 1272/2008/CE','REACH (SVHC)','EPV France','ICPE 1430-1433']},
      {title:'Landmark Projects',
       text:'<strong>Château de la Mercerie</strong> — the "Little Versailles" of the Charente region, holding a Guinness record for its width, listed as a World Cultural Heritage site. After nearly 30 years of abandonment, ALMA F.R.C. spent 3 years restoring it to its original state.'},
      {title:'Partnership with LAB héritage', isCollab:true,
       text:"LAB héritage is the sole entity authorized by ALMA F.R.C. to distribute and implement its restoration product system in Vietnam. LAB héritage's technical team is trained directly by experts from ALMA F.R.C. in France."},
    ],
  },
  keim: {
    flag:'🇩🇪', name:'KEIM',
    tagline_vi:'Hãng sơn khoáng số 1 thế giới — Đức, gần 150 năm',
    tagline_en:"World's No. 1 Mineral Paint — Germany, nearly 150 years",
    stats:[
      {num:'~150', lbl_vi:'Năm lịch sử',    lbl_en:'Years of history'},
      {num:'100+', lbl_vi:'Năm độ bền',      lbl_en:'Year durability'},
      {num:'EPV',  lbl_vi:'Chứng nhận Di Sản', lbl_en:'Heritage Award'},
    ],
    sections_vi:[
      {title:'Lịch sử & Thành lập',
       text:'KEIM được thành lập năm 1878 tại Bavaria, Đức bởi Adolf Wilhelm Keim, người phát minh ra công nghệ <strong>sơn khoáng silicate</strong>. Trong gần 150 năm, KEIM đã trở thành thương hiệu số 1 thế giới về sơn khoáng, được dùng tại các công trình di sản quan trọng nhất hành tinh.'},
      {title:'Công nghệ độc đáo',
       text:'Công nghệ khoáng hóa tạo liên kết hóa học trực tiếp với nền bê tông, đá và vữa — không đơn thuần là lớp phủ bề mặt. Điều này giúp bề mặt <strong>thoát hơi ẩm tự nhiên</strong>, ngăn chặn phồng rộp hoàn toàn. Độ bền cam kết trên <strong>100 năm</strong>.',
       certs:['EPV Germany','ISO 11890','DIN EN 1062','LEED Compatible','pH Neutral']},
      {title:'Công trình tiêu biểu',
       text:'<strong>Nhà hát Opera Sydney (Úc)</strong> — biểu tượng kiến trúc thế giới, Di sản UNESCO. Trong trùng tu tiền sảnh phía Tây, <strong>KEIM Concretal-Lasur</strong> được chọn để bảo vệ bê tông khỏi nước mặn và UV, giữ nguyên vẻ đẹp nguyên bản của Jørn Utzon.'},
      {title:'Hợp tác với LAB héritage', isCollab:true,
       text:'LAB héritage là đối tác được ủy quyền chính thức của KEIM tại Việt Nam, sở hữu toàn bộ dòng sản phẩm chuyên dụng — từ Concretal-Lasur (bảo vệ bê tông) đến Granital (bảo tồn đá tự nhiên) và các hệ sơn khoáng đặc thù khác.'},
    ],
    sections_en:[
      {title:'History & Foundation',
       text:'KEIM was founded in 1878 in Bavaria, Germany by Adolf Wilhelm Keim, inventor of <strong>Mineral Silicate Paint</strong> technology. Over nearly 150 years, KEIM has become the world\'s No. 1 mineral paint brand, used on the planet\'s most important heritage structures.'},
      {title:'Unique Technology',
       text:'Mineralisation technology creates a direct chemical bond with concrete, stone, and render substrates — not merely a coating. This allows the surface to <strong>breathe naturally</strong>, completely preventing blistering. Durability guaranteed for over <strong>100 years</strong>.',
       certs:['EPV Germany','ISO 11890','DIN EN 1062','LEED Compatible','pH Neutral']},
      {title:'Landmark Projects',
       text:'<strong>Sydney Opera House (Australia)</strong> — UNESCO World Heritage architectural icon. During restoration of the Western Foyer, <strong>KEIM Concretal-Lasur</strong> was selected to protect concrete from salt and UV while preserving Jørn Utzon\'s original raw beauty.'},
      {title:'Partnership with LAB héritage', isCollab:true,
       text:"LAB héritage is KEIM's officially authorized partner in Vietnam, carrying the full product range — from Concretal-Lasur (concrete protection) to Granital (natural stone conservation) and other specialized mineral paint systems."},
    ],
  },
};

// ═══════════════════════════════════════
// INSIGHTS DATA
// ═══════════════════════════════════════
const INSIGHTS = [
  {
    id:1, cat_vi:'Hướng Dẫn', cat_en:'Guide',
    title_vi:'Hướng Dẫn Chăm Sóc Công Trình Sau Khi Phục Hồi',
    title_en:'Post-Restoration Care Guide for Your Property',
    subtitle_vi:'Giữ gìn giá trị đầu tư của bạn qua từng năm tháng',
    subtitle_en:'Preserving the value of your investment over the years',
    date_vi:'15 Tháng 3, 2025', date_en:'March 15, 2025',
    content_vi:`<h4>Tại sao chăm sóc sau phục hồi quan trọng?</h4>
<p>Sau khi công trình được phục hồi theo chuẩn Châu Âu, việc duy trì đúng cách sẽ quyết định tuổi thọ thực tế. Một số quy tắc cơ bản:</p>
<ul><li>Kiểm tra bề mặt định kỳ 6 tháng/lần trong 2 năm đầu</li>
<li>Không dùng hóa chất tẩy rửa mạnh lên bề mặt đã xử lý</li>
<li>Vệ sinh bằng nước sạch và dụng cụ mềm</li>
<li>Báo ngay khi phát hiện vết nứt, bong tróc hoặc thấm ẩm</li></ul>
<h4>Lịch bảo dưỡng khuyến nghị</h4>
<p>Tùy hệ vật liệu và môi trường, LAB héritage sẽ lên lịch bảo dưỡng định kỳ — từ vệ sinh nhẹ hàng năm đến bảo dưỡng chuyên sâu mỗi 5 năm.</p>
<p style="font-style:italic;color:rgba(184,150,46,0.8);margin-top:1.5rem;">— Nội dung chi tiết sẽ được bổ sung. Liên hệ LAB héritage để nhận tư vấn cụ thể.</p>`,
    content_en:`<h4>Why post-restoration care matters?</h4>
<p>After restoration to European standards, proper maintenance determines the actual lifespan of the protective layer. Key rules:</p>
<ul><li>Inspect surfaces every 6 months in the first 2 years</li>
<li>Do not use strong chemical cleaners on treated surfaces</li>
<li>Clean with clean water and soft tools</li>
<li>Immediately notify LAB héritage upon discovering cracks, peeling, or moisture ingress</li></ul>
<h4>Recommended maintenance schedule</h4>
<p>Depending on material system and environment, LAB héritage will set up a suitable periodic maintenance schedule.</p>
<p style="font-style:italic;color:rgba(184,150,46,0.8);margin-top:1.5rem;">— Detailed content to be added. Contact LAB héritage for specific consultation.</p>`,
  },
  {
    id:2, cat_vi:'Kỹ Thuật', cat_en:'Technical',
    title_vi:'Xử Lý Bề Mặt Đá Cao Cấp: Từ Patina Đến Bảo Tồn Hiện Đại',
    title_en:'Premium Stone Surface Treatment: From Patina to Modern Conservation',
    subtitle_vi:'Hiểu đúng về "màu thời gian" và cách bảo tồn đúng phương pháp',
    subtitle_en:"Understanding the 'colour of time' and how to conserve it correctly",
    date_vi:'28 Tháng 2, 2025', date_en:'February 28, 2025',
    content_vi:`<h4>Patina là gì và tại sao không nên xóa đi?</h4>
<p>Patina là lớp màng hình thành tự nhiên trên bề mặt đá, gỗ, kim loại qua thời gian — kết quả của oxy hóa, khoáng hóa và tương tác với môi trường. Đối với công trình di sản, Patina chính là bằng chứng xác thực về niên đại và giá trị lịch sử.</p>
<h4>Phân biệt Patina với vết bẩn cần xử lý</h4>
<ul><li><strong>Patina hợp lệ:</strong> Màu sắc đồng đều, bề mặt còn cứng và nguyên vẹn về cấu trúc</li>
<li><strong>Cần can thiệp:</strong> Rêu mốc xâm thực, vết dầu mỡ, muối kết tinh (efflorescence), vết bẩn ngoại sinh</li></ul>
<h4>Quy trình xử lý đá của LAB héritage</h4>
<p>Lấy mẫu phân tích thành phần đá, chọn hóa chất ALMA F.R.C. phù hợp với từng loại (đá vôi, granit, cẩm thạch...), xử lý có kiểm soát, sau đó gia cố và bảo vệ bằng sản phẩm khoáng hóa KEIM.</p>`,
    content_en:`<h4>What is Patina and why should it not be removed?</h4>
<p>Patina is a natural film that forms on stone, wood, and metal over time — the result of oxidation, mineralization, and environmental interaction. For heritage structures, Patina is authentic evidence of age and historical value.</p>
<h4>Distinguishing Patina from dirt needing treatment</h4>
<ul><li><strong>Valid Patina:</strong> Even coloration, surface remains structurally intact and hard</li>
<li><strong>Needs intervention:</strong> Invasive mold, oil stains, efflorescence, exogenous stains</li></ul>
<h4>LAB héritage's stone treatment process</h4>
<p>Sample and analyze stone composition, select appropriate ALMA F.R.C. chemicals for each type (limestone, granite, marble...), treat in controlled steps, then consolidate and protect with KEIM mineralization products.</p>`,
  },
  {
    id:3, cat_vi:'Case Study', cat_en:'Case Study',
    title_vi:'Château de la Mercerie — Hành Trình Phục Chế "Versailles Nhỏ"',
    title_en:'Château de la Mercerie — Restoring the "Little Versailles"',
    subtitle_vi:'Câu chuyện về sự hợp tác giữa ALMA F.R.C. và công trình di sản thế giới',
    subtitle_en:"The story of ALMA F.R.C.'s partnership with a world heritage structure",
    date_vi:'10 Tháng 1, 2025', date_en:'January 10, 2025',
    content_vi:`<h4>Bối cảnh</h4>
<p>Château de la Mercerie, hay còn gọi là "Versailles Nhỏ của vùng Charente", đạt kỷ lục Guinness là tòa lâu đài có chiều ngang dài nhất thế kỷ 20, thuộc Di Sản Văn Hóa Thế Giới. Sau khi bị bỏ hoang gần 30 năm, công trình xuống cấp nghiêm trọng.</p>
<h4>Thách thức</h4>
<p>Phục chế đòi hỏi cân bằng giữa hai yêu cầu mâu thuẫn: phục hồi tình trạng vật lý của công trình, nhưng tuyệt đối không làm mất đi dấu ấn thời gian và giá trị lịch sử.</p>
<h4>Giải pháp & Kết quả</h4>
<p>Năm 2011, ALMA F.R.C. được cấp phép phục chế công trình. Sau 3 năm làm việc với 100% công nghệ và sản phẩm của tập đoàn, Château de la Mercerie được phục hồi về nguyên bản với đầy đủ giá trị lịch sử được bảo tồn.</p>
<h4>Ý nghĩa với LAB héritage</h4>
<p>Câu chuyện này là nền tảng triết lý của chúng tôi: phục chế không phải là làm mới, mà là <em>giữ lại điều xứng đáng được giữ lại</em>.</p>`,
    content_en:`<h4>Background</h4>
<p>Château de la Mercerie, known as the "Little Versailles of the Charente," holds a Guinness record as the longest château of the 20th century and is a UNESCO World Cultural Heritage site. After nearly 30 years of abandonment, it had severely deteriorated.</p>
<h4>The challenge</h4>
<p>Restoration required a perfect balance between restoring the physical condition while absolutely preserving the marks of time and historical value.</p>
<h4>Solution & Results</h4>
<p>In 2011, ALMA F.R.C. was authorized to restore the structure. After 3 years using 100% of the group's technology and products, Château de la Mercerie was restored to its original state with full historical value preserved.</p>
<h4>Significance for LAB héritage</h4>
<p>This story is the foundation of our philosophy: restoration is not renovation, but <em>preserving what is worthy of being preserved</em>.</p>`,
  },
];

// ═══════════════════════════════════════
// PROJECTS DATA
// ═══════════════════════════════════════
const PROJECTS = [
  /* ── Hàng 1 (to): 2 dự án nổi bật ── */
  { id:1, cat:'heritage', featured:true,
    name_vi:'Nhà Hát Opera Sydney', name_en:'Sydney Opera House',
    loc_vi:'Sydney, Úc', loc_en:'Sydney, Australia',
    ctx_vi:'Biểu tượng kiến trúc thế giới, Di sản UNESCO, được KEIM bảo vệ bề mặt bê tông khỏi muối biển và tia UV.',
    ctx_en:'World architectural icon, UNESCO Heritage, with KEIM protecting concrete surfaces from salt spray and UV radiation.',
    status_vi:'Bê tông ngoại thất bị ăn mòn bởi môi trường biển khắc nghiệt, mất màu và bong tróc dần.',
    status_en:'Exterior concrete eroded by harsh marine environment, gradually discoloring and spalling.',
    solution_vi:'Áp dụng KEIM Concretal-Lasur bảo vệ bê tông, giữ nguyên vẻ thô mộc của kiến trúc sư Jørn Utzon.',
    solution_en:'Applied KEIM Concretal-Lasur for concrete protection, preserving architect Jørn Utzon\'s raw aesthetic.',
    result_vi:'Bề mặt bê tông được bảo vệ bền vững, giữ nguyên thiết kế gốc, đạt tiêu chuẩn bảo tồn UNESCO.',
    result_en:'Concrete surfaces durably protected, original design preserved, meeting UNESCO conservation standards.' },
  { id:2, cat:'heritage', featured:false,
    name_vi:'Château de la Mercerie', name_en:'Château de la Mercerie',
    loc_vi:'Charente, Pháp', loc_en:'Charente, France',
    ctx_vi:'Lâu đài cổ điển Pháp hơn 300 năm tuổi, gần 30 năm bỏ hoang, được ALMA F.R.C. phục hồi về nguyên bản.',
    ctx_en:'300+ year old French classic château, abandoned for nearly 30 years, restored to original by ALMA F.R.C.',
    status_vi:'Toàn bộ vữa và đá trang trí bị phong hóa, rêu mốc xâm thực, nguy cơ sụp đổ cấu trúc.',
    status_en:'All mortar and decorative stone weathered, moss and mold invasive, risk of structural collapse.',
    solution_vi:'Vữa cổ tái tạo từ ALMA F.R.C., phục chế đá tái tạo, phủ bảo vệ EPV-standard suốt 5 năm.',
    solution_en:'ALMA F.R.C. reproduced historic mortar, reconstituted stone restoration, EPV-standard protective coating over 5 years.',
    result_vi:'Lâu đài phục hồi hoàn hảo về nguyên bản, đạt chứng nhận EPV, trở thành biểu tượng bảo tồn di sản Châu Âu.',
    result_en:'Château perfectly restored to original, EPV certified, becoming a European heritage conservation benchmark.' },
  /* ── Hàng 2 (thường): 3 dự án ── */
  { id:3, cat:'heritage', featured:false,
    name_vi:'Chùa Cầu Hội An', name_en:'Hoi An Japanese Bridge',
    loc_vi:'Hội An, Quảng Nam', loc_en:'Hoi An, Quang Nam',
    ctx_vi:'Di sản quốc gia đặc biệt, biểu tượng của Hội An, cần phục chế mái ngói và vữa cổ sau hơn 400 năm.',
    ctx_en:'Special national heritage, symbol of Hoi An, requiring restoration of ancient roof tiles and mortar after 400+ years.',
    status_vi:'Mái ngói bị rêu bám dày, vữa vôi gốc bong tróc, gỗ cấu trúc mờ màu và xuống cấp.',
    status_en:'Roof tiles heavily encrusted, original lime mortar spalling, structural wood faded and deteriorated.',
    solution_vi:'Vệ sinh sinh học bề mặt ngói, tái tạo vữa vôi truyền thống theo ALMA F.R.C., bảo vệ gỗ bằng dầu khoáng EU.',
    solution_en:'Biological tile surface cleaning, traditional lime mortar reproduction with ALMA F.R.C., wood protection with EU mineral oils.',
    result_vi:'Chùa Cầu phục hồi đúng màu sắc gốc, bảo tồn nguyên vẹn giá trị lịch sử, kéo dài tuổi thọ 50+ năm.',
    result_en:'Japanese Bridge restored to original colors, historical value fully conserved, extending lifespan 50+ years.' },
  { id:4, cat:'resort', featured:false,
    name_vi:'Resort Fly Up Phú Quốc', name_en:'Fly Up Resort Phu Quoc',
    loc_vi:'Phú Quốc, Kiên Giang', loc_en:'Phu Quoc, Kien Giang',
    ctx_vi:'Khu nghỉ dưỡng cao cấp ven biển, vật liệu tự nhiên xuống cấp nhanh do môi trường biển nhiệt đới.',
    ctx_en:'Luxury beachfront resort, natural materials rapidly deteriorating due to tropical marine environment.',
    status_vi:'Đá tự nhiên mất màu, gỗ bạc trắng, bề mặt bê tông ốp lát bị rêu và muối kết tinh.',
    status_en:'Natural stone discolored, wood bleached, tiled concrete surfaces covered in algae and salt crystallization.',
    solution_vi:'KEIM Granital bảo vệ đá, dầu dưỡng EU phục hồi gỗ, ALMA F.R.C. xử lý bê tông chống muối.',
    solution_en:'KEIM Granital for stone protection, EU conditioning oils for wood restoration, ALMA F.R.C. anti-salt concrete treatment.',
    result_vi:'Resort được làm mới hoàn toàn, vật liệu bền vững 15+ năm, nâng hạng sao thành công.',
    result_en:'Resort completely renewed, materials durable 15+ years, successful star rating upgrade.' },
  { id:5, cat:'civil', featured:false,
    name_vi:'Phục Hồi Sản Phẩm Da Cao Cấp', name_en:'Luxury Leather Goods Restoration',
    loc_vi:'TP. Hồ Chí Minh', loc_en:'Ho Chi Minh City',
    ctx_vi:'Bộ sưu tập túi da và ghế da cao cấp bị bạc màu, trầy xước và khô nứt sau thời gian dài sử dụng.',
    ctx_en:'Collection of luxury leather bags and chairs faded, scratched, and cracked after prolonged use.',
    status_vi:'Da bị bạc màu, mất dầu tự nhiên, bề mặt khô và nứt nẻ, một số điểm bong tróc lớp phủ.',
    status_en:'Leather faded, lost natural oils, surface dry and cracked, some areas with coating peeling.',
    solution_vi:'Làm sạch chuyên sâu bằng ALMA F.R.C., tái tạo màu sắc gốc, phủ dầu dưỡng khoáng EU tạo bảo vệ lâu dài.',
    solution_en:'Deep cleaning with ALMA F.R.C., original color restoration, EU mineral conditioning oil for long-term protection.',
    result_vi:'Sản phẩm da phục hồi như mới, màu sắc trung thực với gốc, độ mềm và bóng đạt tiêu chuẩn nhà sản xuất.',
    result_en:'Leather goods restored like new, colors faithful to original, softness and shine meeting manufacturer standards.' },
  /* ── Hàng 3 (to): 2 dự án mới ── */
  { id:6, cat:'heritage', featured:false,
    name_vi:'Văn Miếu Quốc Tử Giám', name_en:'Temple of Literature',
    loc_vi:'Đống Đa, Hà Nội', loc_en:'Dong Da, Hanoi',
    ctx_vi:'Quần thể di tích quốc gia đặc biệt, bia đá Tiến sĩ và hệ thống mái ngói cổ hơn 600 năm tuổi xuống cấp do thời gian và ô nhiễm.',
    ctx_en:'Special national heritage complex: 600+ year-old doctoral stone stelae and ancient roof tile systems deteriorated due to age and pollution.',
    status_vi:'Bề mặt đá bia bị rêu mốc bám dày, muối kết tinh làm bong tróc đá, mái ngói cổ bị rêu xanh và nứt vỡ.',
    status_en:'Stone stele surfaces heavily encrusted with moss, salt crystallization causing stone spalling, ancient roof tiles with algae and cracks.',
    solution_vi:'Vệ sinh sinh học bằng ALMA F.R.C., phục chế và gia cố bề mặt theo ICOMOS, phủ bảo vệ KEIM khoáng hóa.',
    solution_en:'Biological cleaning with ALMA F.R.C., restoration and consolidation per ICOMOS, KEIM mineralization protective coating.',
    result_vi:'Hệ thống bia đá bảo tồn nguyên vẹn, Patina lịch sử được giữ, đạt tiêu chuẩn bảo tồn UNESCO.',
    result_en:'Stone stele system preserved intact, historical Patina maintained, meeting UNESCO conservation standards.' },
  { id:7, cat:'heritage', featured:true,
    name_vi:'Nhà Thờ Đức Bà Sài Gòn', name_en:'Saigon Notre-Dame Cathedral',
    loc_vi:'Quận 1, TP.HCM', loc_en:'District 1, Ho Chi Minh City',
    ctx_vi:'Công trình kiến trúc Pháp mang tính biểu tượng xây từ 1863–1880, gạch clinker đỏ Marseille và vữa vôi cổ xuống cấp sau 140+ năm.',
    ctx_en:'Iconic French architectural work built 1863–1880; Marseille red clinker bricks and ancient lime mortar deteriorating after 140+ years.',
    status_vi:'Vữa gốc bị rỗ và bong tróc, gạch clinker thấm muối và ố màu, chi tiết trang trí đá bị phong hóa và mất nét.',
    status_en:'Original mortar pitted and spalling, clinker bricks salt-affected and discolored, stone decorative details weathered and lost definition.',
    solution_vi:'Phân tích vữa gốc theo EN 16085, tái tạo vữa từ ALMA F.R.C. đúng thành phần, phủ KEIM Granital không thay đổi màu gạch.',
    solution_en:'Original mortar analysis per EN 16085, ALMA F.R.C. reproduced mortar matching composition, KEIM Granital coating preserving brick color.',
    result_vi:'Mặt tiền phục hồi đúng màu gạch đỏ Marseille gốc, vữa tái tạo bền 80+ năm, di sản kiến trúc bảo tồn hoàn hảo.',
    result_en:'Facade restored to original Marseille red brick color, reproduced mortar 80+ year durability, architectural heritage perfectly preserved.' },
];

// ═══════════════════════════════════════
// STATE
// ═══════════════════════════════════════
let currentLang = 'vi';
let currentFilter = 'all';

// ═══════════════════════════════════════
// DOM READY
// ═══════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileNav();
  initLangToggle();
  initBeforeAfter();
  initPortfolio();
  renderStandards();
  initScrollReveal();
  initBrandModals();
  initInsightModals();
  initProjectModal();
  initFormSubmit();
  initConsultBtn();   // ← Nút tư vấn nổi + modal
  setLang('vi');
});

// ─── Navbar ────────────────────────────
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
    let cur = '';
    sections.forEach(s => { if (window.scrollY >= s.offsetTop - 100) cur = s.id; });
    navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${cur}`));
  });
}

// ─── Mobile Nav ────────────────────────
function initMobileNav() {
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileNav.classList.toggle('open');
    document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
  });
  mobileNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

// ─── Language ──────────────────────────
function initLangToggle() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });
}
function setLang(lang) {
  currentLang = lang;
  const t = LANG[lang];
  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));
  document.querySelectorAll('[data-t]').forEach(el => { if (t[el.dataset.t] !== undefined) el.innerHTML = t[el.dataset.t]; });
  document.querySelectorAll('[data-tp]').forEach(el => { if (t[el.dataset.tp] !== undefined) el.placeholder = t[el.dataset.tp]; });
  // Cập nhật aria-label cho nút đóng modal
  document.querySelectorAll('.modal-close').forEach(btn => {
    btn.setAttribute('aria-label', t.modal_close || (lang === 'vi' ? 'Đóng' : 'Close'));
  });
  document.querySelectorAll('[data-aria-label-t]').forEach(el => {
    const key = el.dataset.ariaLabelT;
    if (t[key]) el.setAttribute('aria-label', t[key]);
  });
  // Cập nhật tooltip nút floating
  const tooltipZalo = document.querySelector('.float-btn[href*="zalo"] .float-btn-tooltip');
  const tooltipPhone = document.querySelector('.float-btn[href^="tel"] .float-btn-tooltip');
  if (tooltipZalo) tooltipZalo.textContent = t.tooltip_zalo || 'Chat Zalo';
  if (tooltipPhone) tooltipPhone.textContent = t.tooltip_phone || (lang === 'vi' ? 'Gọi ngay' : 'Call now');
  renderPortfolio();
  renderStandards();
}

// ─── Before/After ──────────────────────
function initBeforeAfter() {
  const container = document.querySelector('.ba-slider-container');
  if (!container) return;
  const afterEl = container.querySelector('.ba-after');
  const handle  = container.querySelector('.ba-handle');
  let dragging = false;
  function setPos(x) {
    const r = container.getBoundingClientRect();
    let p = Math.max(5, Math.min(95, ((x - r.left) / r.width) * 100));
    afterEl.style.clipPath = `inset(0 ${100 - p}% 0 0)`;
    handle.style.left = `${p}%`;
  }
  container.addEventListener('mousedown', e => { dragging = true; setPos(e.clientX); });
  window.addEventListener('mousemove', e => { if (dragging) setPos(e.clientX); });
  window.addEventListener('mouseup', () => { dragging = false; });
  container.addEventListener('touchstart', e => { dragging = true; setPos(e.touches[0].clientX); }, {passive:true});
  window.addEventListener('touchmove', e => { if (dragging) setPos(e.touches[0].clientX); }, {passive:true});
  window.addEventListener('touchend', () => { dragging = false; });
  const r = container.getBoundingClientRect();
  setPos(r.left + r.width / 2);
}

// ─── Standards ─────────────────────────
function renderStandards() {
  const grid = document.getElementById('standards-grid');
  if (!grid) return;
  grid.innerHTML = STANDARDS.map((s, i) => `
    <div class="standard-card reveal reveal-delay-${(i % 4) + 1}">
      <div class="standard-icon">${s.icon}</div>
      <div class="standard-name">${s.name}</div>
      <div class="standard-scope">${s[`scope_${currentLang}`]}</div>
      <div class="standard-desc">${s[`desc_${currentLang}`]}</div>
    </div>`).join('');
  observeReveal(grid.querySelectorAll('.reveal'));
}

// ─── Portfolio ─────────────────────────
function initPortfolio() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      renderPortfolio();
    });
  });
  renderPortfolio();
}
function renderPortfolio() {
  const grid = document.getElementById('portfolio-grid');
  if (!grid) return;
  const t = LANG[currentLang];
  const filtered = currentFilter === 'all' ? PROJECTS : PROJECTS.filter(p => p.cat === currentFilter);
  const total = filtered.length;

  grid.innerHTML = filtered.map((p, i) => {
    // Layout 2-3-2:
    // Hàng 1 (index 0,1): wide | Hàng 2 (index 2,3,4): normal | Hàng 3 (index 5,6): wide
    // Fallback: nếu filtered (khi filter) không đủ 7, dùng normal cho tất cả
    let sizeClass = 'project-card--normal';
    if (total === 7) {
      if (i < 2 || i >= 5) sizeClass = 'project-card--wide';
    }
    const featuredClass = p.featured ? ' project-card--featured' : '';
    const featuredBadge = p.featured
      ? `<div class="project-featured-badge" data-t="pf_featured">${t.pf_featured || 'Nổi bật'}</div>`
      : '';

    return `
    <div class="project-card ${sizeClass}${featuredClass} reveal reveal-delay-${Math.min(i+1,5)}"
         data-id="${p.id}" role="button" tabindex="0">
      <div class="project-placeholder img-placeholder">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
          <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>
          <polyline points="21,15 16,10 5,21"/>
        </svg>
        <p>${p[`name_${currentLang}`]}</p>
      </div>
      ${featuredBadge}
      <div class="project-overlay">
        <div class="project-cat">${t[`pf_${p.cat}`]||p.cat}</div>
        <div class="project-name">${p[`name_${currentLang}`]}</div>
        <div class="project-loc">${p[`loc_${currentLang}`]}</div>
      </div>
    </div>`;
  }).join('');

  observeReveal(grid.querySelectorAll('.reveal'));
  grid.querySelectorAll('.project-card').forEach(card => {
    const open = () => openProjectModal(parseInt(card.dataset.id));
    card.addEventListener('click', open);
    card.addEventListener('keydown', e => { if (e.key==='Enter'||e.key===' ') open(); });
  });
}

// ─── Scroll Reveal ─────────────────────
function initScrollReveal() { observeReveal(document.querySelectorAll('.reveal')); }
function observeReveal(els) {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, {threshold:0.1});
  els.forEach(el => obs.observe(el));
}

// ─── Modal Helpers ──────────────────────
function openOverlay(id) {
  const o = document.getElementById(id);
  if (!o) return;
  const m = o.querySelector('.modal');
  if (m) { m.style.animation='none'; m.offsetHeight; m.style.animation=''; }
  o.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeOverlay(id) {
  const o = document.getElementById(id);
  if (!o) return;
  o.classList.remove('open');
  document.body.style.overflow = '';
}
function setupClose(id) {
  const o = document.getElementById(id);
  if (!o) return;
  o.querySelector('.modal-close')?.addEventListener('click', () => closeOverlay(id));
  o.addEventListener('click', e => { if (e.target===o) closeOverlay(id); });
}
document.addEventListener('keydown', e => {
  if (e.key==='Escape') {
    document.querySelectorAll('.modal-overlay.open').forEach(o => o.classList.remove('open'));
    document.body.style.overflow = '';
  }
});

// ─── Brand Modals ──────────────────────
function initBrandModals() {
  setupClose('modal-alma');
  setupClose('modal-keim');

  document.getElementById('btn-alma')?.addEventListener('click', () => {
    renderBrandModal('alma');
    // Scroll nhẹ đến phần câu chuyện tương ứng
    const target = document.getElementById('alma-story');
    if (target) setTimeout(() => target.scrollIntoView({ behavior:'smooth', block:'center' }), 300);
  });
  document.getElementById('btn-keim')?.addEventListener('click', () => {
    renderBrandModal('keim');
    const target = document.getElementById('keim-story');
    if (target) setTimeout(() => target.scrollIntoView({ behavior:'smooth', block:'center' }), 300);
  });
}
function renderBrandModal(key) {
  const brand = BRANDS[key];
  const lang  = currentLang;
  const sections = brand[`sections_${lang}`];
  const o = document.getElementById(`modal-${key}`);
  o.querySelector('.brand-modal-flag').textContent    = brand.flag;
  o.querySelector('.brand-modal-name').textContent    = brand.name;
  o.querySelector('.brand-modal-tagline').textContent = brand[`tagline_${lang}`];
  o.querySelector('.brand-stat-row').innerHTML = brand.stats.map(s =>
    `<div class="brand-stat"><div class="brand-stat-num">${s.num}</div><div class="brand-stat-lbl">${s[`lbl_${lang}`]}</div></div>`
  ).join('');
  o.querySelector('.brand-sections').innerHTML = sections.map(sec => `
    <div class="brand-section">
      <div class="brand-section-title">${sec.title}</div>
      ${sec.isCollab
        ? `<div class="brand-collab-box"><p>${sec.text}</p></div>`
        : `<div class="brand-section-text">${sec.text}</div>`}
      ${sec.certs ? `<div class="brand-certs">${sec.certs.map(c=>`<span class="brand-cert">${c}</span>`).join('')}</div>` : ''}
    </div>`).join('');
  openOverlay(`modal-${key}`);
}

// ─── Insight Modals ────────────────────
function initInsightModals() {
  setupClose('modal-insight');
  document.querySelectorAll('.insight-card').forEach(card => {
    const open = () => openInsightModal(parseInt(card.dataset.id));
    card.addEventListener('click', open);
    card.addEventListener('keydown', e => { if (e.key==='Enter'||e.key===' ') open(); });
  });
}
function openInsightModal(id) {
  const ins = INSIGHTS.find(x => x.id===id);
  if (!ins) return;
  const lang = currentLang;
  const o = document.getElementById('modal-insight');
  o.querySelector('.insight-modal-cat').textContent      = ins[`cat_${lang}`];
  o.querySelector('.insight-modal-date').textContent     = ins[`date_${lang}`];
  o.querySelector('.insight-modal-title').textContent    = ins[`title_${lang}`];
  o.querySelector('.insight-modal-subtitle').textContent = ins[`subtitle_${lang}`];
  o.querySelector('.insight-modal-content').innerHTML    = ins[`content_${lang}`];
  openOverlay('modal-insight');
}

// ─── Project Modal ─────────────────────
function initProjectModal() { setupClose('project-modal'); }
function openProjectModal(id) {
  const p = PROJECTS.find(x => x.id===id);
  if (!p) return;
  const lang = currentLang;
  const t = LANG[lang];
  const L = {vi:{ctx:'Bối Cảnh',status:'Hiện Trạng',solution:'Giải Pháp',result:'Thành Quả'},
             en:{ctx:'Background',status:'Current State',solution:'Solution',result:'Results'}}[lang];
  const o = document.getElementById('project-modal');
  o.querySelector('.modal-cat').textContent   = t[`pf_${p.cat}`]||p.cat;
  o.querySelector('.modal-title').textContent = p[`name_${lang}`];
  o.querySelector('.modal-sections').innerHTML = `
    <div><div class="modal-section-title">${L.ctx}</div><div class="modal-section-text">${p[`ctx_${lang}`]}</div></div>
    <div><div class="modal-section-title">${L.status}</div><div class="modal-section-text">${p[`status_${lang}`]}</div></div>
    <div><div class="modal-section-title">${L.solution}</div><div class="modal-section-text">${p[`solution_${lang}`]}</div></div>
    <div><div class="modal-section-title">${L.result}</div><div class="modal-section-text">${p[`result_${lang}`]}</div></div>`;
  openOverlay('project-modal');
}

// ─── Consult floating button + quick modal ───────────
function initConsultBtn() {
  /* 1. Tạo nút tư vấn và thêm vào floating-btns */
  const floatingWrap = document.querySelector('.floating-btns');
  if (!floatingWrap) return;

  const consultBtn = document.createElement('button');
  consultBtn.className = 'float-btn float-btn--consult';
  consultBtn.id = 'btn-consult';
  consultBtn.setAttribute('aria-haspopup', 'dialog');
  consultBtn.setAttribute('aria-controls', 'modal-consult');
  consultBtn.innerHTML = `
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
    <span class="consult-btn-text" data-t="consult_btn">Tư vấn ngay</span>
  `;
  /* Thứ tự: Zalo (đã có) → Phone (đã có) → Tư vấn (thêm cuối)
     insertBefore firstChild đặt lên đầu → dùng appendChild để đặt xuống cuối */
  floatingWrap.appendChild(consultBtn);

  /* 2. Tạo modal quick-contact và thêm vào body */
  const modalEl = document.createElement('div');
  modalEl.className = 'modal-overlay modal-centered';
  modalEl.id = 'modal-consult';
  modalEl.setAttribute('role', 'dialog');
  modalEl.setAttribute('aria-modal', 'true');
  modalEl.innerHTML = `
    <div class="modal modal--md">
      <button class="modal-close" aria-label="Đóng">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
      <div class="consult-modal-body">
        <h3 class="consult-modal-title" data-t="consult_modal_title">
          Bắt đầu <em>dự án</em> của bạn
        </h3>
        <p class="consult-modal-sub" data-t="consult_modal_sub">
          "Việc tưởng như không thể là công việc hàng ngày của chúng tôi"
        </p>
        <form class="consult-form" id="consult-form" novalidate>
          <div class="consult-form-row">
            <div>
              <label data-t="consult_label_name">Họ và tên</label>
              <input type="text" name="name" required
                     data-tp="consult_ph_name" placeholder="Họ và tên của bạn"/>
            </div>
            <div>
              <label data-t="consult_label_phone">Số điện thoại</label>
              <input type="tel" name="phone"
                     data-tp="consult_ph_phone" placeholder="Số điện thoại"/>
            </div>
          </div>
          <div>
            <label data-t="consult_label_service">Dịch vụ quan tâm</label>
            <select name="service">
              <option value="" data-t="consult_svc0">— Chọn dịch vụ —</option>
              <option value="heritage" data-t="consult_svc1">Bảo tồn di sản</option>
              <option value="villa"    data-t="consult_svc2">Phục hồi Villa & Resort</option>
              <option value="material" data-t="consult_svc3">Xử lý vật liệu cao cấp</option>
              <option value="other"    data-t="consult_svc4">Khác</option>
            </select>
          </div>
          <div>
            <label data-t="consult_label_msg">Nội dung yêu cầu</label>
            <textarea name="message"
                      data-tp="consult_ph_msg"
                      placeholder="Mô tả ngắn công trình / yêu cầu..."></textarea>
          </div>
          <button type="submit" class="consult-submit" data-t="consult_submit">
            Gửi yêu cầu tư vấn
          </button>
        </form>
      </div>
    </div>
  `;
  document.body.appendChild(modalEl);

  /* 3. Sự kiện mở/đóng modal */
  consultBtn.addEventListener('click', () => {
    /* Áp dụng ngôn ngữ hiện tại cho modal vừa tạo */
    const t = LANG[currentLang];
    modalEl.querySelectorAll('[data-t]').forEach(el => {
      if (t[el.dataset.t] !== undefined) el.innerHTML = t[el.dataset.t];
    });
    modalEl.querySelectorAll('[data-tp]').forEach(el => {
      if (t[el.dataset.tp] !== undefined) el.placeholder = t[el.dataset.tp];
    });
    openOverlay('modal-consult');
  });

  /* Đóng khi click overlay */
  setupClose('modal-consult');

  /* 4. Submit form mock */
  modalEl.querySelector('#consult-form').addEventListener('submit', e => {
    e.preventDefault();
    const btn = e.target.querySelector('.consult-submit');
    const orig = btn.textContent;
    btn.textContent = currentLang === 'vi' ? 'Đang gửi...' : 'Sending...';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = currentLang === 'vi' ? '✓ Đã gửi!' : '✓ Sent!';
      btn.style.cssText = 'background:#2d6a4f;color:#fff;';
      setTimeout(() => {
        btn.textContent = orig;
        btn.disabled = false;
        btn.style.cssText = '';
        e.target.reset();
        closeOverlay('modal-consult');
      }, 2500);
    }, 1200);
  });
}

/* Cập nhật nút tư vấn khi chuyển ngữ */
const _origSetLang = setLang;
setLang = function(lang) {
  _origSetLang(lang);
  /* Cập nhật text nút consult nếu đã tạo */
  const t = LANG[lang];
  const consultText = document.querySelector('.consult-btn-text');
  if (consultText && t.consult_btn) consultText.textContent = t.consult_btn;
};
function initFormSubmit() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('.btn-submit');
    const orig = btn.textContent;
    btn.textContent = currentLang==='vi' ? 'Đang gửi...' : 'Sending...';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = currentLang==='vi' ? '✓ Đã gửi thành công!' : '✓ Sent successfully!';
      btn.style.cssText = 'background:#2d6a4f;border-color:#2d6a4f;color:#fff;';
      setTimeout(() => { btn.textContent=orig; btn.disabled=false; btn.style.cssText=''; form.reset(); }, 3000);
    }, 1500);
  });
}
