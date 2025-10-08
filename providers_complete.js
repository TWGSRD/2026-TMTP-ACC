const providers = [
    // 金流服務 (2)
    {
        name: "Lucas",
        company: "Payoneer",
        service_type: "金流服務",
        offer_description: "• 新賣家專享0.8% 優惠提領費率 (原費率1.2%)\n• 大中華區內Payoneer帳號戶轉12個月0費率 (包含中國大陸, 台灣香港與澳門)\n• 開通Payoneer 萬事達隨心付卡免月費 (新卡戶開通後, 三個月內每個月有至少2000美元消費)\n• 享受Payoneer 跨境生態圈服務, 快速連接1000+ 大中華區跨境電商服務商, 超20+ Payoneer 網內閉環直付\n\n請填寫表單開通優惠費率: https://reurl.cc/bmKY8d",
        company_intro: "Payoneer（NASDAQ: PAYO）成立於2005年，總部位於美國紐約，是全球領先的跨境支付平台。\n服務涵蓋190+國家與地區、150+幣別，提供電商賣家、自由工作者與企業多幣別收款帳戶、供應商付款、跨境轉帳及Mastercard卡片。Payoneer以合規安全、費率透明與操作便利著稱，協助用戶降低跨境金流成本並提升全球業務效率。",
        website: "https://www.payoneer.com/",
        phone: "0909604190",
        line_id: "lucas0122",
        email: "Lucashs@payoneer.com",
        logo: "Payoneer.jpg",
        qr_code: "Payoneer.png"
    },
    {
        name: "洪銘言 Frank",
        company: "尋匯SUNRATE",
        service_type: "金流服務",
        offer_description: "提現 &支付手續費 0.5% (原價0.7%)\n使用優惠請聯繫Frank, 並告知為智造在台灣6.0 & 亞馬遜新銳品牌加速器2.0學員",
        company_intro: "尋匯SUNRATE創立於2016年，全球業務總部位於新加坡，致力於為企業提供安全、高效的全球支付與財資管理解決方案。公司與花旗、渣打等國際頂級銀行達成合作，並取得了Mastercard和Visa的主會員資質，同時也是亞馬遜SPN服務商。依託自主研發的強大技術引擎、廣泛的支付網路與定制化API方案，尋匯SUNRATE助力企業在190+國家及地區開展業務。",
        website: "https://www.sunrate.com/",
        phone: "0971753892",
        line_id: "soramisu",
        email: "frank.hung@sunrate.com",
        logo: "尋匯SUNRATE.png"
    },
    // 品牌素材製作 (6)
    {
        name: "Couger Yang",
        company: "Click Visual Co., Ltd 克利柏有限公司",
        service_type: "品牌素材製作",
        offer_description: "1. 品牌Logo＋基礎規範：NTD 80,000 / 64折 - NTD 125,000(原價)\n2. 包裝設計：NTD 15,000 / 75折 - NTD 20,000(原價)\n3. 商品拍攝(純產品素背景)：NTD 10,000 / 83折 - NTD 12,000(原價)\n4. 主圖視覺設計(七張)：NTD 18,000 / 9折 - NTD 20,000(原價)\n5. Brand Store：NTD 23,000 / 85折 - NTD 27,000(原價)\n6. A+頁面：NTD 20,000 / 8折 - NTD 25,000(原價)\nCOMBO A（1～6）— NTD 140,000\nCOMBO B（3～4）— NTD 23,500\nCOMBO C（3～6）— NTD 60,000",
        company_intro: "Click Visual Co. 我們是一間位於台北的全方位品牌設計公司，專注透過策略與創意打造具市場競爭力的視覺形象。團隊橫跨品牌設計、網站架設、行銷策略、攝影與社群內容，提供從品牌定位、視覺建立到行銷執行的一站式服務。Click 強調設計不只要美觀，更要引發共鳴、創造互動與驅動行動，為品牌打造兼具美感與效益的整體體驗。",
        website: "www.clickvisualco.com",
        phone: "+886989102664",
        line_id: "yangcouger",
        email: "couger.yang@clickvisual.co",
        logo: "Click Visual Co., Ltd 克利柏有限公司.jpg",
        discount_image: "Click Visual Co., Ltd 克利柏有限公司.jpg"
    },
    {
        name: "Sue",
        company: "Odin 跨境電商運營",
        service_type: "品牌素材製作",
        offer_description: "9折優惠:\n產品特點圖、A+ Content、品牌旗艦店設計皆享有9折優惠\n產品特點圖、A+ Content 原價$24,000元/產品\n品牌旗艦店以後續頁面規劃報價約$25,000-$65,000間",
        company_intro: "Odin 跨境電商團隊，累積 7+ 年實戰經驗，為品牌量身打造亞馬遜專屬成長策略，協助賣家平均實現 200% 銷售成長",
        website: "https://odinecom.com/",
        phone: "0988397829",
        line_id: "",
        email: "sue@odinecom.com",
        logo: "Odin 跨境電商運營.png"
    },
    {
        name: "Wendy Chang",
        company: "奕昕國際有限公司(游牧電商)",
        service_type: "品牌素材製作",
        offer_description: "品牌優化方案 75折, 詳情請點擊放大圖片",
        company_intro: "奕昕國際有限公司成立於2017年，以游牧電商為品牌之跨境電商行銷顧問公司。主要提供中小型跨境電商公司及個人行號，客製化的[代營運服務]、[陪跑教練服務]。顧問諮詢服務力求精準，針對客戶需要之項目提供意見和服務，為賣家節省成本，讓營運更流暢。目前有[游牧電商FB粉絲團]與[亞馬遜賣家部落]，電商線上線下課程。",
        website: "https://essentialmarketing.com.tw/",
        phone: "0903332591",
        line_id: "",
        email: "nomadfriends@gmail.com",
        logo: "奕昕國際有限公司(游牧電商).png",
        discount_image: "奕昕國際有限公司(游牧電商)1.jpg",
        qr_code: "奕昕國際有限公司(游牧電商)1.png"
    },
    {
        name: "吳廷萱",
        company: "靈志科技有限公司",
        service_type: "品牌素材製作",
        offer_description: "新手大禮包：7張商品圖攝影 + 商品Listing頁面設計 + 商品展示30sec短影音 大禮包88折 $10,500元 (原價 $12,000元)\n(以下圖片點擊放大)",
        company_intro: "靈志科技是Chance Creative在台灣地區成立的運營實體，而Chance Creative是大中華地區亞馬遜認證的知名服務商 (Amazon Ads Verified Partner)，在品牌出海的多媒體/短影音拍攝領域擁有豐富的經驗和專業知識，特別是面對國際市場的品牌/商品定位與賣點提煉、行銷素材(平面/影片)拍攝和影音廣告投放規畫部分，能夠為客戶提供高品質的服務。",
        website: "ChanceSight.com",
        phone: "0960197960",
        line_id: "lindawu1969",
        email: "lindawu1969@gmail.com",
        logo: "靈志科技有限公司.png"
    },
    {
        name: "Stella",
        company: "秩宇Wiser",
        service_type: "品牌素材製作",
        offer_description: "商品頁內容優化方案，協助您進行視覺內容企劃，並執行產品競品分析，進一步撰寫圖片文案，客製化設計產品主子圖與 Basic A+: 優惠價$59,999元 (原價$65,000元)",
        company_intro: "秩宇 Wiser 隸屬於視宇集團，致力於幫助跨境品牌持續成長、貨賣全球。透過研究各國消費市場數據以及 AI 工具，推動客戶的數位品牌貿易，創造實質獲利！",
        website: "https://viewec.com/",
        phone: "0975127727",
        line_id: "a93324u",
        email: "stella@wwwiser.com.tw",
        logo: "秩宇Wiser.png",
        discount_image: "秩宇Wiser.png",
        qr_code: "秩宇Wiser.png"
    },
    {
        name: "張永淑",
        company: "全球賣跨境電商",
        service_type: "品牌素材製作",
        offer_description: "商品Listing撰寫服務優惠價$13,000元/SKU (原價:$15,000元/SKU)",
        company_intro: "Seller Vantage 全球賣：集團賦能，全球市場領航者\n隸屬唯數集團旗下，專精於跨境電商領域的策略性業務核心，我們憑藉集團深厚的數位營運與全球市場拓展實力，致力於為合作夥伴精準佈局國際電商版圖，實現品牌影響力與市場銷售的雙重躍升。",
        website: "https://www.sellervantage.com.tw/ourservices/",
        phone: "0929339312",
        line_id: "chris_c.",
        email: "chris.chang@sellervantage.com.tw",
        discount_image: "全球賣跨境電商.jpg"
    }
];

function filterProviders(serviceType) {
    const grid = document.getElementById('providers-grid');
    const tabs = document.querySelectorAll('.nav-tab');
    
    tabs.forEach(tab => tab.classList.remove('active'));
    event.target.classList.add('active');
    
    const filteredProviders = providers.filter(p => p.service_type === serviceType);
    
    grid.innerHTML = '';
    filteredProviders.forEach(provider => {
        const card = createProviderCard(provider);
        grid.appendChild(card);
    });
}

function createProviderCard(provider) {
    const card = document.createElement('div');
    card.className = 'provider-card';
    
    const logoPath = provider.logo ? `logo/${provider.logo}` : '';
    const discountImagePath = provider.discount_image ? `discount image/${provider.discount_image}` : '';
    const qrCodePath = provider.qr_code ? `QR code/${provider.qr_code}` : '';
    
    // Convert URLs in offer description to clickable links
    const offerWithLinks = provider.offer_description.replace(
        /(https?:\/\/[^\s]+)/g, 
        '<a href="$1" target="_blank" style="color: #FF6200; text-decoration: underline;">$1</a>'
    );
    
    // Handle multiple discount images for special companies
    let discountImagesHtml = '';
    if (provider.company === '靈志科技有限公司') {
        discountImagesHtml = `
            <img src="discount image/靈志科技有限公司1.jpg" alt="優惠方案1" class="offer-image" onclick="openImageModal('discount image/靈志科技有限公司1.jpg')" style="cursor: pointer; margin: 10px 0;">
            <img src="discount image/靈志科技有限公司2.jpg" alt="優惠方案2" class="offer-image" onclick="openImageModal('discount image/靈志科技有限公司2.jpg')" style="cursor: pointer; margin: 10px 0;">
        `;
    } else if (discountImagePath) {
        discountImagesHtml = `<img src="${discountImagePath}" alt="優惠方案" class="offer-image" onclick="openImageModal('${discountImagePath}')" style="cursor: pointer;">`;
    }
    
    card.innerHTML = `
        <div class="provider-header">
            ${logoPath ? `<img src="${logoPath}" alt="${provider.company}" class="provider-logo" onclick="openImageModal('${logoPath}')" style="cursor: pointer;">` : ''}
            <div class="provider-name">${provider.company}</div>
        </div>
        
        <div class="offer-section">
            <div class="offer-title">🎁 優惠方案</div>
            <div class="offer-description">${offerWithLinks}</div>
            ${discountImagesHtml}
        </div>
        
        <div class="contact-section">
            <div class="contact-title">📞 聯繫方式</div>
            <div class="contact-info">👤 姓名：${provider.name}</div>
            <div class="contact-info">📧 Email：${provider.email}</div>
            <div class="contact-info">📱 手機：${provider.phone}</div>
            ${provider.line_id ? `<div class="contact-info">💬 LINE ID：${provider.line_id}</div>` : ''}
        </div>
        
        ${provider.company_intro ? `
        <div class="company-intro">
            <strong>🏢 公司介紹：</strong><br>
            ${provider.company_intro}
            ${provider.website ? `<br><br>🌐 官網：<a href="${provider.website.startsWith('http') ? provider.website : 'https://' + provider.website}" target="_blank" style="color: #FF6200;">${provider.website}</a>` : ''}
            ${getQRCodeHTML(provider)}
        </div>
        ` : ''}
        
        <div style="text-align: center; margin-top: 20px; padding-top: 15px; border-top: 1px solid #eee;">
            <a href="#navigation" style="color: #FF6200; text-decoration: none; font-size: 18px; display: inline-block; padding: 8px 12px; border-radius: 20px; background-color: #FFF3E0; transition: all 0.3s ease;" onmouseover="this.style.backgroundColor='#FFE0B2'; this.style.transform='translateY(-2px)'" onmouseout="this.style.backgroundColor='#FFF3E0'; this.style.transform='translateY(0)'">
                🔝 回到上方主選單
            </a>
        </div>
    `;
    
    return card;
}

function getQRCodeHTML(provider) {
    let qrHTML = '';
    
    if (provider.company === 'AZ-Helper') {
        qrHTML = `<br><br>
            <img src="QR code/AZ-Helper.png" alt="AZ-Helper QR Code 1" class="qr-code" onclick="openImageModal('QR code/AZ-Helper.png')" style="cursor: pointer; margin-right: 10px;">
            <img src="QR code/AZ-Helper 2.png" alt="AZ-Helper QR Code 2" class="qr-code" onclick="openImageModal('QR code/AZ-Helper 2.png')" style="cursor: pointer;">`;
    } else if (provider.company === 'Sellerboard') {
        qrHTML = `<br><br>
            <img src="QR code/SellerBoard 1.png" alt="Sellerboard QR Code 1" class="qr-code" onclick="openImageModal('QR code/SellerBoard 1.png')" style="cursor: pointer; margin-right: 10px;">
            <img src="QR code/SellerBoard 2.png" alt="Sellerboard QR Code 2" class="qr-code" onclick="openImageModal('QR code/SellerBoard 2.png')" style="cursor: pointer;">`;
    } else if (provider.company === 'SellerSprite ') {
        qrHTML = `<br><br>
            <img src="QR code/SellerSprite 1.png" alt="SellerSprite QR Code 1" class="qr-code" onclick="openImageModal('QR code/SellerSprite 1.png')" style="cursor: pointer; margin-right: 10px;">
            <img src="QR code/SellerSprite 2.png" alt="SellerSprite QR Code 2" class="qr-code" onclick="openImageModal('QR code/SellerSprite 2.png')" style="cursor: pointer;">`;
    } else if (provider.qr_code) {
        const qrCodePath = `QR code/${provider.qr_code}`;
        qrHTML = `<br><br><img src="${qrCodePath}" alt="QR Code" class="qr-code" onclick="openImageModal('${qrCodePath}')" style="cursor: pointer;">`;
    }
    
    return qrHTML;
}

function openImageModal(imageSrc) {
    document.getElementById('modalImage').src = imageSrc;
    document.getElementById('imageModal').style.display = 'block';
}

function closeImageModal() {
    document.getElementById('imageModal').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
    filterProviders('金流服務');
});

// Add all remaining providers with original Chinese image names
providers.push(
    // 商標申請 (2)
    {
        name: "Vicky Lee",
        company: "博智衛好智權有限公司",
        service_type: "商標申請",
        offer_description: "[美國]\n美國商標申請每類 優惠價格 新台幣 25,000元（未稅）[原價 新台幣 29,000元（未稅）]\n美國商標領證每類 優惠價格 新台幣 5,000元（未稅）[原價 新台幣 6,000元（未稅）]\n使用宣示（SOU）每類 優惠價格 新台幣 15,000元（未稅）[原價 新台幣 17,000元（未稅）]\n\n[日本]\n日本商標申請首類 優惠價格 新台幣 18,000元（未稅）[原價 新台幣 20,000元（未稅）]\n日本商標領證首類 優惠價格 新台幣 10,800元（未稅）[原價 新台幣 12,000元（未稅）]\n\n[澳洲]\n澳洲商標申請每類 優惠價格 新台幣 16,000元（未稅） [原價 新台幣 18,000元（未稅）]\n澳洲商標領證每類 優惠價格 新台幣 2,000元（未稅）[原價 新台幣 3,000元（未稅）]\n\n[新加坡]\n新加坡商標申請每類 優惠價格 新台幣 17,000元（未稅）[新台幣 19,000元（未稅）]\n新加坡商標領證每類 優惠價格 新台幣 2,000元（未稅）[新台幣 3,000元（未稅）]",
        company_intro: "",
        website: "www.bcrights.com",
        phone: "0965596536",
        line_id: "",
        email: "vickylee@bcrights.com"
    },
    {
        name: "Jonathan",
        company: "AZ-Helper",
        service_type: "商標申請",
        offer_description: "亞馬遜優惠價 -$100美金 / 件\n申請費 $649 美金 ~ $799 美金 (不含規費，含領證 & 贈送品牌註冊)\n(以下圖片點擊放大)",
        company_intro: "AZ-Helper 提供專業的商標申請服務",
        website: "",
        phone: "0905108893",
        line_id: "",
        email: "jonathan@az-helper.com",
        logo: "AZ-Helper.png",
        discount_image: "AZ-Helper (VAT&商標申請).png",
        qr_code: "AZ-Helper.png"
    },
    // VAT申請 (1)
    {
        name: "Jonathan",
        company: "AZ-Helper",
        service_type: "VAT申請",
        offer_description: "專屬亞馬遜價格, 包含 中東 UAE 4400 NTD ; SA 5540 NTD\n(以下圖片點擊放大)",
        company_intro: "AZ-Helper 提供專業的VAT申請服務",
        website: "",
        phone: "0905108893",
        line_id: "",
        email: "jonathan@az-helper.com",
        logo: "AZ-Helper.png",
        discount_image: "AZ-Helper (VAT&商標申請).png",
        qr_code: "AZ-Helper.png"
    },
    // 產品合規 (2)
    {
        name: "童寶慶",
        company: "傑地有限公司",
        service_type: "產品合規",
        offer_description: "FDA註冊享九折，原價：食品USD1000、醫療設備 USD1600、非處方藥USD1600、化妝品工廠USD800",
        company_intro: "",
        website: "https://www.jasdi.com.tw/fda.htm",
        phone: "0988-757152",
        line_id: "",
        email: "jasdi.tc@jasdi.com.tw",
        logo: "傑地有限公司.png",
        discount_image: "傑地有限公司.png",
        qr_code: "傑地有限公司.jpg"
    },
    {
        name: "邱雅瑩",
        company: "SGS",
        service_type: "產品合規",
        offer_description: "專案九折優惠價:\n\nSGS 提供亞馬遜直接審查(DV)服務，針對特定品項，賣家將可直接選擇在台灣進行審查完成合規並順利上架，\n並享有以下指定檢測服務專案九折優惠價！\n指定測試項目：CPSIA、CPC、REACh、加州65、PFAS\n\n想知道更多關於自行車及配件、美妝保養品、兒童玩具產品、食品及保健食品、電子電器產品，測試服務及優惠，歡迎聯繫SGS !",
        company_intro: "SGS 是全球領先的測試、檢驗與驗證公司，據點遍佈 115 個國家，擁有超過 2,500 間實驗室與辦公室，由近 100,000 名專業人員組成團隊。SGS 擁有超過 145 年的卓越經驗，致力於協助企業達成高品質、合規與永續發展的目標。我們秉持SGS＂When you need to be sure＂的品牌承諾，提供企業在全球市場上成長所需的信任與保障。",
        website: "https://www.sgs.com.tw/",
        phone: "0905239150",
        line_id: "hana891101",
        email: "Eileen.Qiu@sgs.com",
        logo: "SGS.png",
        discount_image: "SGS.jpg",
        qr_code: "SGS.png"
    },
    // 代營運 (3)
    {
        name: "Sue",
        company: "Odin 跨境電商運營",
        service_type: "代營運",
        offer_description: "代運營費用第一年享有9折優惠 (原價每月$35,000元，優惠價$31,500元）",
        company_intro: "Odin 跨境電商團隊，累積 7+ 年實戰經驗，為品牌量身打造亞馬遜專屬成長策略，協助賣家平均實現 200% 銷售成長",
        website: "https://odinecom.com/",
        phone: "0988397829",
        line_id: "",
        email: "sue@odinecom.com",
        logo: "Odin 跨境電商運營.png"
    },
    {
        name: "善恩創新股份有限公司(窗口：郭冠均 Rovi Kuo)",
        company: "DRS 跨境電商整合服務",
        service_type: "代營運",
        offer_description: "(限美、日站）\n為已完成品牌註冊的新賣家，提供從新品刊登上架到完整Listing 企劃製作的Starter頁面建置方案，單次組合之早鳥方案價 NT$ 33000 起；若需求包含出貨、品牌館或廣告基礎設置，加購後可享整體專案優惠 9 折。另有商品商業照片＆影片攝影(包含素材製作)的專屬優惠。",
        company_intro: "DRS 跨境電商整合服務，攜手多家企業成功於全球市場經營。專精亞馬遜營運、廣告投放、數據分析與策略諮詢，極具創新資訊整合能力，導入AI 加速數位轉型，是您成長路上長期經營最佳夥伴。",
        website: "https://www.drs.network/",
        phone: "02-28378995",
        line_id: "",
        email: "info@tw.drs.network",
        logo: "DRS 跨境電商整合服務.png",
        discount_image: "DRS 跨境電商整合服務.png",
        qr_code: "DRS 跨境電商整合服務.png"
    },
    {
        name: "張永淑",
        company: "全球賣跨境電商",
        service_type: "代營運",
        offer_description: "前三個月月費$19,999元/月(原價:$55,000元/月)。廣告抽成前三個月2.5%(原價5%)。",
        company_intro: "Seller Vantage 全球賣：集團賦能，全球市場領航者\n隸屬唯數集團旗下，專精於跨境電商領域的策略性業務核心，我們憑藉集團深厚的數位營運與全球市場拓展實力，致力於為合作夥伴精準佈局國際電商版圖，實現品牌影響力與市場銷售的雙重躍升。",
        website: "https://www.sellervantage.com.tw/ourservices/",
        phone: "0929339312",
        line_id: "chris_c.",
        email: "chris.chang@sellervantage.com.tw",
        discount_image: "全球賣跨境電商.jpg"
    },
    // 第三方工具軟體 (3)
    {
        name: "Jonathan",
        company: "AZ-Helper",
        service_type: "第三方工具軟體",
        offer_description: "AZ-Helper APP 主要功能介紹：\n- 計算機：利潤計算器、FBA物流計算與降低建議、補貨計畫\n- 分析：市場分析懶人包、亞馬遜廣告PPC報表分析\n- 營運：合併排名&Review、賠償金invoice生成器、關鍵字分析工具、批次廣告建立\n- 客服/疑難雜症：評論挽回 AI、評論申訴AI、侵權申訴AI、多帳號關聯申訴AI\n\n下載連結: https://www.az-helper.app/\n(以下圖片點擊放大)",
        company_intro: "AZ-Helper 提供全方位亞馬遜賣家工具服務",
        website: "",
        phone: "0905108893",
        line_id: "",
        email: "jonathan@az-helper.com",
        logo: "AZ-Helper.png",
        discount_image: "AZ-Helper(第三方工具軟體).png",
        qr_code: "AZ-Helper.png"
    },
    {
        name: "Jonathan",
        company: "Sellerboard",
        service_type: "第三方工具軟體",
        offer_description: "Sellerboard 功能\n-利潤數據分析，自動生成損益表等重要報表\n-運營成本管理\n-廣告利潤分析及自動優化\n-庫存管理，協助索賠\n-Listing及FBA費用 變更提醒\n-自動回覆\n\n專案專屬優惠1): 兩個月免費體驗Sellerboard: 體驗入口 https://sellerboard.com/?p=00987\n專案專屬優惠2): 1:1線上30分鐘帳戶盈利健檢 或單品損益分析\n(以下圖片點擊放大)",
        company_intro: "",
        website: "",
        phone: "0905108893",
        line_id: "",
        email: "jonathan@az-helper.com",
        logo: "Sellerboard.jpg",
        discount_image: "Sellerboard.png"
    },
    {
        name: "Jonathan",
        company: "SellerSprite ",
        service_type: "第三方工具軟體",
        offer_description: "主要功能介紹\n-大數據選品: 查競品、選產品、選市場、關鍵字選品\n-關鍵字研究：關鍵詞挖掘、關鍵詞反查、出單詞反查\n-運營推廣：廣告洞察、查流量來源、關聯流量、AI評論分析、產品監控\n-Chrome 插件：銷量查詢、市場分析\n\n30天免費體驗: https://sellersprite.com/cn/w/user/signup/tw\n請您註冊好帳戶後發訊息給我們, 我們將開通30天免費體驗.\n(以下圖片點擊放大)",
        company_intro: "",
        website: "",
        phone: "0905108893",
        line_id: "",
        email: "jonathan@az-helper.com",
        logo: "SellerSprite.png",
        discount_image: "SellerSprite.png"
    },
    // 跨境物流 (4) - Updated with 2 new providers
    {
        name: "Linda Tsai",
        company: "金匯國際物流",
        service_type: "跨境物流",
        offer_description: "美國食品/醫療器材代理進口人折扣 新台幣$3,000/票\n日本海運方案: 折扣 新台幣$2,000/票\n歐洲海運方案: 折扣 新台幣$2,000/票\n不限新舊客戶 限1次",
        company_intro: "金匯國際物流專注於國與國之間的跨境物流整合方案, 致力於以數位化工具重塑物流體驗, 服務涵蓋美國、日本、澳洲與歐洲,提供多元運輸方案與海外倉儲加值服務,協助品牌精準佈局國際市場。",
        website: "https://shipprime.com.tw/",
        phone: "0955321429",
        line_id: "063lokgc",
        email: "lindatsai@goldenwelltw.com",
        logo: "金匯國際物流.png",
        qr_code: "金匯國際物流.png"
    },
    {
        name: "江仁凱",
        company: "萬泰物流供應鏈股份有限公司",
        service_type: "跨境物流",
        offer_description: "專案價9折\n日本亞馬遜\n啟運價  NTD24500/首CBM\n續CBM NTD8000/CＢＭ　1-3CBM(未滿3CBM)\n續CBM NTD5500/CＢＭ　3-8CBM(未滿8CBM)\n續CBM NTD5000/CＢＭ　8CBM以上\n\n澳洲亞馬遜\n啟運價  NTD25800/首CBM\n續CBM  NTD7000/CBM",
        company_intro: "設立：1995年7月\n員工人數：台灣.中國 2500人 // 全球 約 3500人\n董事長：鄭毓文 先生\n組織協會：\n國際海運承攬運送公會會員FIATA。國際航空運輸協會會員IATA No：HO 34-306580000。海運承攬運送商業同業IOFFLAT No.：305。美國聯邦海事委員會FMC Bond No.：90961。中國大陸無船公共運送人NVOCC No.：MOC-NV01754。中國大陸一級貨代 No.：C120069884。\n美國C-TPAT//歐洲 WCA Family of Logistic Networks\n總公司：台北市八德路 2段 308 號 5 樓\n聯絡電話：+886-2-25459900",
        website: "https://scm.dolphin-gp.com/en",
        phone: "0930889145",
        line_id: "victory10052",
        email: "eason.chiang@dolphin-gp.com",
        logo: "萬泰物流供應鏈股份有限公司.png"
    },
    {
        name: "Andre Hsu",
        company: "台灣順豐速運",
        service_type: "跨境物流",
        offer_description: "月結客戶快遞9折起(其他貨型專案報價優惠)",
        company_intro: "台灣順豐速運是跨境物流專家，除了優勢的空運快遞外，更能依您所需客製跨境貨運代理服務，是您拓展跨境貿易、跨境電商的最佳夥伴！時效優異、全程快遞路由追蹤並提供保價服務(貨物保險)，安心又快速。",
        website: "www.sf-express.com.tw",
        phone: "0916865352",
        line_id: "andre5233",
        email: "andrehsu@sf-express.com.tw",
        logo: "台灣順豐速運.png",
        qr_code: "台灣順豐速運.jpg"
    },
    {
        name: "Bryan Chou",
        company: "Gladstone Fulfillment, Inc.",
        service_type: "跨境物流",
        offer_description: "海外倉新客戶優惠方案 : 免除初始帳戶註冊費用(價值$300 USD) 以及第一個月倉儲費用減免",
        company_intro: "Gladstone Fulfillment Inc. 位於美國加州洛杉磯地區，提供倉儲、訂單處理、備貨出貨、中轉與供應鏈整合服務。\n\n服務相目包括物流倉儲、Amazon FBA/AWD貨物中轉、FBM一件代發，支援B2B、B2C、電商等多元出貨模式。\n\n無論是跨境電商物流、外包倉儲物流、供應鏈管理，我們的團隊具備能力和靈活性，可以滿足任何的海外倉儲物流需求。",
        website: "www.GladstoneFulfillment.com",
        phone: "909-235-6253",
        line_id: "8166826864",
        email: "bryan@gladstonefulfillment.com",
        logo: "Gladstone Fulfillment, Inc..jpg",
        discount_image: "Gladstone Fulfillment, Inc..jpg"
    },
    // 第三方培訓課程 (3)
    {
        name: "Doris",
        company: "TransBiz",
        service_type: "第三方培訓課程",
        offer_description: "品牌打造入門學｜優惠價：$199 USD，原價：$1600 USD\nhttps://trb.one/Seller-Boost-Camp",
        company_intro: "台灣第一間亞馬遜服務商、最多破億營收客戶案例。以精實創業的陪跑顧問與專家教練，讓想建立跨境事業的你，以相對低成本驗證市場、破除文化阻礙，塑造符合當地市場需求的品牌形象與價值，打造熱銷全球的品牌！",
        website: "https://transbiz.com.tw",
        phone: "0932202623",
        line_id: "＠transbiz",
        email: "dorislin@transbiz.co",
        logo: "TransBiz.png",
        qr_code: "TransBiz.png"
    },
    {
        name: "Jonathan",
        company: "AZ-Helper",
        service_type: "第三方培訓課程",
        offer_description: "(以下圖片點擊放大)",
        company_intro: "AZ-Helper 提供專業的亞馬遜培訓課程",
        website: "",
        phone: "0905108893",
        line_id: "",
        email: "jonathan@az-helper.com",
        logo: "AZ-Helper.png",
        discount_image: "AZ-Helper(第三方培訓課程).png",
        qr_code: "AZ-Helper.png"
    },
    {
        name: "Wendy Chang",
        company: "奕昕國際有限公司(游牧電商)",
        service_type: "第三方培訓課程",
        offer_description: "陪跑教練方案 買3個月就送1個月(原價13,500/月, 專屬優惠相當於75折)",
        company_intro: "奕昕國際有限公司成立於2017年，以游牧電商為品牌之跨境電商行銷顧問公司。主要提供中小型跨境電商公司及個人行號，客製化的[代營運服務]、[陪跑教練服務]。顧問諮詢服務力求精準，針對客戶需要之項目提供意見和服務，為賣家節省成本，讓營運更流暢。目前有[游牧電商FB粉絲團]與[亞馬遜賣家部落]，電商線上線下課程。",
        website: "https://essentialmarketing.com.tw/",
        phone: "0903332591",
        line_id: "",
        email: "nomadfriends@gmail.com",
        logo: "奕昕國際有限公司(游牧電商).png",
        discount_image: "奕昕國際有限公司(游牧電商)2.jpg",
        qr_code: "奕昕國際有限公司(游牧電商)2.jpg"
    }
);
