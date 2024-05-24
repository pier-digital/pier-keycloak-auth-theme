<#import "/assets/icons/logo-pier.ftl" as logoPier>

<#macro kw>
  <body class="bg-pier-background flex flex-col items-center justify-center min-h-screen sm:py-16">
    <div class="container flex items-center mb-14 justify-center w-48">
      <@logoPier.kw />
    </div>
    <#nested>
  </body>
</#macro>
