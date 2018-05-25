<?xml version="1.0" encoding="UTF-8" ?>
<Package name="Hello World" format_version="4">
    <Manifest src="manifest.xml" />
    <BehaviorDescriptions>
        <BehaviorDescription name="behavior" src="behaviors" xar="behavior.xar" />
    </BehaviorDescriptions>
    <Dialogs>
        <Dialog name="main_with_tablet" src="dialogs/main_with_tablet.dlg" />
        <Dialog name="main_without_tablet" src="dialogs/main_without_tablet.dlg" />
    </Dialogs>
    <Resources>
        <File name="icon" src="icon.png" />
        <File name="bootstrap-theme" src="html/css/bootstrap-theme.css" />
        <File name="bootstrap-theme.css" src="html/css/bootstrap-theme.css.map" />
        <File name="bootstrap-theme.min" src="html/css/bootstrap-theme.min.css" />
        <File name="bootstrap" src="html/css/bootstrap.css" />
        <File name="bootstrap.css" src="html/css/bootstrap.css.map" />
        <File name="bootstrap.min" src="html/css/bootstrap.min.css" />
        <File name="index" src="html/index.html" />
        <File name="bootstrap.min" src="html/js/bootstrap.min.js" />
        <File name="jquery-2.1.4.min" src="html/js/jquery-2.1.4.min.js" />
        <File name="main" src="html/js/main.js" />
        <File name="robotutils" src="html/js/robotutils.js" />
        <File name="logo" src="html/media/logo.jpg" />
        <File name="pepper" src="html/media/pepper.jpg" />
    </Resources>
    <Topics>
        <Topic name="main_with_tablet_enu" src="dialogs/main_with_tablet_enu.top" topicName="main_with_tablet" language="en_US" />
        <Topic name="main_with_tablet_iti" src="dialogs/main_with_tablet_iti.top" topicName="main_with_tablet" language="it_IT" />
        <Topic name="main_without_tablet_enu" src="dialogs/main_without_tablet_enu.top" topicName="main_without_tablet" language="en_US" />
        <Topic name="main_without_tablet_iti" src="dialogs/main_without_tablet_iti.top" topicName="main_without_tablet" language="it_IT" />
    </Topics>
    <IgnoredPaths />
    <Translations auto-fill="en_US">
        <Translation name="translation_en_US" src="translations/translation_en_US.ts" language="en_US" />
        <Translation name="translation_it_IT" src="translations/translation_it_IT.ts" language="it_IT" />
    </Translations>
</Package>
