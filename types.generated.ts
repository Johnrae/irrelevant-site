// Code generated by prismic-ts-codegen. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for Band documents */
interface BandDocumentData {
    /**
     * Name field in *Band*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: band.name
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    name: prismicT.KeyTextField;
    /**
     * Loacation field in *Band*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: band.loacation
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    loacation: prismicT.KeyTextField;
    /**
     * Header Image field in *Band*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: band.headerImage
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    headerImage: prismicT.ImageField<"full">;
    /**
     * Links field in *Band*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: band.links[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    links: prismicT.GroupField<Simplify<BandDocumentDataLinksItem>>;
    /**
     * Agent field in *Band*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: band.agent[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    agent: prismicT.GroupField<Simplify<BandDocumentDataAgentItem>>;
    /**
     * Bio field in *Band*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: band.bio
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    bio: prismicT.RichTextField;
    /**
     * Slice Zone field in *Band*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: band.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<BandDocumentDataSlicesSlice>;
}
/**
 * Item in Band → Links
 *
 */
export interface BandDocumentDataLinksItem {
    /**
     * Url field in *Band → Links*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: band.links[].url
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    url: prismicT.LinkField;
    /**
     * Title field in *Band → Links*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: band.links[].title
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
}
/**
 * Item in Band → Agent
 *
 */
export interface BandDocumentDataAgentItem {
    /**
     * Name field in *Band → Agent*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: band.agent[].name
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    name: prismicT.KeyTextField;
    /**
     * Email field in *Band → Agent*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: band.agent[].email
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    email: prismicT.KeyTextField;
}
/**
 * Slice for *Band → Slice Zone*
 *
 */
type BandDocumentDataSlicesSlice = ImageGallerySlice | BasicContentSlice;
/**
 * Band document from Prismic
 *
 * - **API ID**: `band`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BandDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<BandDocumentData>, "band", Lang>;
/** Content for ConsultingProject documents */
interface ConsultingProjectDocumentData {
    /**
     * Title field in *ConsultingProject*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: consulting-project.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * Summary field in *ConsultingProject*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: consulting-project.summary
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    summary: prismicT.RichTextField;
    /**
     * Header field in *ConsultingProject*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: consulting-project.header
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    header: prismicT.ImageField<"full">;
    /**
     * Slice Zone field in *ConsultingProject*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: consulting-project.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<ConsultingProjectDocumentDataSlicesSlice>;
}
/**
 * Slice for *ConsultingProject → Slice Zone*
 *
 */
type ConsultingProjectDocumentDataSlicesSlice = ImageGallerySlice | BasicContentSlice;
/**
 * ConsultingProject document from Prismic
 *
 * - **API ID**: `consulting-project`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ConsultingProjectDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<ConsultingProjectDocumentData>, "consulting-project", Lang>;
/** Content for Event documents */
interface EventDocumentData {
    /**
     * Flyer field in *Event*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: event.flyer
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    flyer: prismicT.ImageField<never>;
    /**
     * Featured Image field in *Event*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: event.featuredImage
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    featuredImage: prismicT.ImageField<never>;
    /**
     * Title field in *Event*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: event.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * Ticket Link field in *Event*
     *
     * - **Field Type**: Link to Media
     * - **Placeholder**: *None*
     * - **API ID Path**: event.ticketLink
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    ticketLink: prismicT.LinkToMediaField;
    /**
     * Body field in *Event*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: event.body
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    body: prismicT.RichTextField;
    /**
     * Date field in *Event*
     *
     * - **Field Type**: Date
     * - **Placeholder**: *None*
     * - **API ID Path**: event.date
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/date
     *
     */
    date: prismicT.DateField;
    /**
     * Bands field in *Event*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: event.bands[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    bands: prismicT.GroupField<Simplify<EventDocumentDataBandsItem>>;
    /**
     * Venue Name field in *Event*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: event.venueName
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    venueName: prismicT.KeyTextField;
    /**
     * Venue Address field in *Event*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: event.venueAddress
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    venueAddress: prismicT.KeyTextField;
    /**
     * Venue Location field in *Event*
     *
     * - **Field Type**: GeoPoint
     * - **Placeholder**: *None*
     * - **API ID Path**: event.venueLocation
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/geopoint
     *
     */
    venueLocation: prismicT.GeoPointField;
    /**
     * Social Links field in *Event*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: event.socialLinks[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    socialLinks: prismicT.GroupField<Simplify<EventDocumentDataSocialLinksItem>>;
    /**
     * Start Time field in *Event*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: event.startTime
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    startTime: prismicT.KeyTextField;
    /**
     * End Time field in *Event*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: event.endTime
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    endTime: prismicT.KeyTextField;
    /**
     * Slice Zone field in *Event*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: event.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<EventDocumentDataSlicesSlice>;
}
/**
 * Item in Event → Bands
 *
 */
export interface EventDocumentDataBandsItem {
    /**
     * Name field in *Event → Bands*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: event.bands[].name
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    name: prismicT.KeyTextField;
    /**
     * Url field in *Event → Bands*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: event.bands[].url
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    url: prismicT.LinkField;
}
/**
 * Item in Event → Social Links
 *
 */
export interface EventDocumentDataSocialLinksItem {
    /**
     * Name field in *Event → Social Links*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: event.socialLinks[].name
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    name: prismicT.KeyTextField;
    /**
     * Url field in *Event → Social Links*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: event.socialLinks[].url
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    url: prismicT.LinkField;
}
/**
 * Slice for *Event → Slice Zone*
 *
 */
type EventDocumentDataSlicesSlice = BasicContentSlice | ImageGallerySlice;
/**
 * Event document from Prismic
 *
 * - **API ID**: `event`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type EventDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<EventDocumentData>, "event", Lang>;
export type AllDocumentTypes = BandDocument | ConsultingProjectDocument | EventDocument;
/**
 * Primary content in BasicContent → Primary
 *
 */
interface BasicContentSliceDefaultPrimary {
    /**
     * Body field in *BasicContent → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: basic_content.primary.body
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    body: prismicT.RichTextField;
}
/**
 * Default variation for BasicContent Slice
 *
 * - **API ID**: `default`
 * - **Description**: `BasicContent`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type BasicContentSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<BasicContentSliceDefaultPrimary>, never>;
/**
 * Slice variation for *BasicContent*
 *
 */
type BasicContentSliceVariation = BasicContentSliceDefault;
/**
 * BasicContent Shared Slice
 *
 * - **API ID**: `basic_content`
 * - **Description**: `BasicContent`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type BasicContentSlice = prismicT.SharedSlice<"basic_content", BasicContentSliceVariation>;
/**
 * Item in ImageGallery → Items
 *
 */
export interface ImageGallerySliceDefaultItem {
    /**
     * Image field in *ImageGallery → Items*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: image_gallery.items[].image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<"thumbnail">;
}
/**
 * Default variation for ImageGallery Slice
 *
 * - **API ID**: `default`
 * - **Description**: `ImageGallery`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ImageGallerySliceDefault = prismicT.SharedSliceVariation<"default", Record<string, never>, Simplify<ImageGallerySliceDefaultItem>>;
/**
 * Slice variation for *ImageGallery*
 *
 */
type ImageGallerySliceVariation = ImageGallerySliceDefault;
/**
 * ImageGallery Shared Slice
 *
 * - **API ID**: `image_gallery`
 * - **Description**: `ImageGallery`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ImageGallerySlice = prismicT.SharedSlice<"image_gallery", ImageGallerySliceVariation>;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { BandDocumentData, BandDocumentDataLinksItem, BandDocumentDataAgentItem, BandDocumentDataSlicesSlice, BandDocument, ConsultingProjectDocumentData, ConsultingProjectDocumentDataSlicesSlice, ConsultingProjectDocument, EventDocumentData, EventDocumentDataBandsItem, EventDocumentDataSocialLinksItem, EventDocumentDataSlicesSlice, EventDocument, AllDocumentTypes, BasicContentSliceDefaultPrimary, BasicContentSliceDefault, BasicContentSliceVariation, BasicContentSlice, ImageGallerySliceDefaultItem, ImageGallerySliceDefault, ImageGallerySliceVariation, ImageGallerySlice };
    }
}
